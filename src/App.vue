<template />

<script setup lang="ts">
import { onMounted } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { geoInterpolate } from 'd3-geo';
import { Group } from 'three';
import { gsap } from 'gsap';
import globeVertexShader from './shaders/globe/globeVertex.glsl';
import globeFragmentShader from './shaders/globe/globeFragment.glsl';
import * as THREE from 'three';

let container: HTMLElement | null = document.querySelector('#app');
let scene: THREE.Object3D<THREE.Event> | THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: any;
let objectsGroup: Group;
let globMap: any;

const GLOBE_RADIUS = 25;
const WORLD_DOT_ROWS = 200;
const WORLD_DOT_SIZE = 0.095;
const CURVE_MIN_ALTITUDE = 12;
const CURVE_MAX_ALTITUDE = 12;
const CURVE_SEGMENTS = 64;
const CURVE_RADIUS_SEGMENTS = 8;
const CURVE_RADIUS = 0.1;

onMounted(() => {
  // Création de la scène
  scene = new THREE.Scene();
  scene.updateMatrixWorld(true);

  // Création de la caméra
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);

  // Création du render
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  // Insertion du render dans le DOM
  if (container) {
    container.appendChild(renderer.domElement);
  }

  // Création du groupe d'objets
  objectsGroup = new THREE.Group();

  // On récupère la position de départ en fonction de celle de l'utilisateur
  const euler = new THREE.Euler(0.3, 4.6, 0.05);
  const offset = new Date().getTimezoneOffset() || 0;
  euler.y = euler.y + Math.PI * (offset / 720);
  // objectsGroup.rotation.copy(euler);

  scene.add(objectsGroup);

  // Mise en place d'orbite control
  const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
  controls.maxDistance = 120;
  controls.minDistance = 10;

  // Mise en place des helpers pour les axes
  const axeHelper = new THREE.AxesHelper(100);
  // scene.add(axeHelper);

  // Création de la sphère représentant le globe
  const globeGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 32);
  const globeMaterial = new THREE.MeshBasicMaterial({
    color: 0x255aae,
    transparent: true,
    side: 2,
  });
  const globeSphere = new THREE.Mesh(globeGeometry, globeMaterial);
  scene.add(globeSphere);

  // Création de la sphère représentant l'ombrage du globe
  const atmosphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 32);
  const atmosphereMaterial = new THREE.ShaderMaterial({
    vertexShader: globeVertexShader,
    fragmentShader: globeFragmentShader,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });
  const atmosphereSphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  atmosphereSphere.scale.set(1.25, 1.25, 1.25);
  scene.add(atmosphereSphere);

  // Création de l'image pour récupérer la position des points
  globMap = new Image();
  globMap.src = './assets/glob-map.png';
  globMap.onload = () => initDots();

  // Création de la courbe représentant un vol
  const coords = [-33.865143, 151.2099, 34.052235, -118.243683];

  const pathMaterial = new THREE.MeshBasicMaterial({
    blending: THREE.AdditiveBlending,
    transparent: false,
    color: 0x81d9fb,
    opacity: 1,
  });
  const curve = drawLine(coords, pathMaterial);
  const pathMesh = new THREE.Mesh();
  pathMesh.add(curve);
  scene.add(pathMesh);

  // Lumières
  const directionLight: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionLight.position.set(0, 0, 200);
  directionLight.scale.set(10, 10, 10);

  const directionLightBack: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionLightBack.position.set(0, 0, -200);
  directionLightBack.scale.set(10, 10, 10);

  // scene.add(directionLight);
  // scene.add(directionLightBack);

  camera.position.set(0, 0, 80);
  scene.add(camera);

  animate();
});

// Création des points représentant les continents
const initDots = () => {
  const object = new THREE.Object3D();
  const imageData = getImageData(globMap);
  const points = [];

  for (let lat = -90; lat <= 90; lat += 180 / WORLD_DOT_ROWS) {
    const radius = Math.cos(Math.abs(lat) * THREE.MathUtils.DEG2RAD) * GLOBE_RADIUS;
    const circum = radius * Math.PI * 2 * 2;

    for (let i = 0; i < circum; i++) {
      const lng = (360 * i) / circum - 180;

      if (visibilityForCoordinates(lat, lng, imageData)) {
        const dotPosition = computeDotPosition(lat, lng, GLOBE_RADIUS);
        object.position.set(dotPosition.x, dotPosition.y, dotPosition.z);

        const o = computeDotPosition(lat, lng, GLOBE_RADIUS + 5);
        object.lookAt(o.x, o.y, o.z);
        object.updateMatrix();
        points.push(object.matrix.clone());
      }
    }
  }

  const dotGeometry = new THREE.CircleGeometry(WORLD_DOT_SIZE, 8);
  const dotMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.6,
  });

  const dotMesh = new THREE.InstancedMesh(dotGeometry, dotMaterial, points.length);

  for (let l = 0; l < points.length; l++) {
    dotMesh.setMatrixAt(l, points[l]);
  }

  dotMesh.renderOrder = 3;
  objectsGroup.add(dotMesh);
};

const drawLine = (coords, material) => {
  const { spline } = getSplineFromCoordinates(coords);
  const geometry = new THREE.TubeGeometry(
    spline,
    CURVE_SEGMENTS,
    CURVE_RADIUS,
    CURVE_RADIUS_SEGMENTS,
    false
  );

  // 6 sommets par face, fois 8 faces, fois le nombre de lignes, ici 64
  geometry.setDrawRange(0);
  gsap.to(geometry.drawRange, { count: 6 * CURVE_RADIUS_SEGMENTS * CURVE_SEGMENTS, duration: 1 });

  return new THREE.Mesh(geometry, material);
};

// Converti une coordonnée en position sur le globe
const coordinateToPosition = (lat, lng, radius) => {
  const phi = (90 - lat) * THREE.MathUtils.DEG2RAD;
  const theta = (lng + 180) * THREE.MathUtils.DEG2RAD;

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

const getSplineFromCoordinates = (coords) => {
  const startLat = coords[0];
  const startLng = coords[1];
  const endLat = coords[2];
  const endLng = coords[3];

  // Start and end points
  const start = coordinateToPosition(startLat, startLng, GLOBE_RADIUS);
  const end = coordinateToPosition(endLat, endLng, GLOBE_RADIUS);

  // Altitude
  const altitude = clamp(start.distanceTo(end) * 0.75, CURVE_MIN_ALTITUDE, CURVE_MAX_ALTITUDE);

  // 2 control points
  const interpolate = geoInterpolate([startLng, startLat], [endLng, endLat]);
  const midCoord1 = interpolate(0.3);
  const midCoord2 = interpolate(0.7);
  const mid1 = coordinateToPosition(midCoord1[1], midCoord1[0], GLOBE_RADIUS + altitude);
  const mid2 = coordinateToPosition(midCoord2[1], midCoord2[0], GLOBE_RADIUS + altitude);

  return {
    start,
    end,
    spline: new THREE.CubicBezierCurve3(start, mid1, mid2, end),
  };
};

// Clamp
const clamp = (num, min, max) => {
  return num <= min ? min : num >= max ? max : num;
};

// Calcule si pour une coordonnée, le point doit-être affiché sur le globe ou non
function visibilityForCoordinates(latitude: number, longitude: number, data: any) {
  const i = 4 * data.width;
  const r = parseInt(String(((longitude + 180) / 360) * data.width + 0.5));
  const a = data.height - parseInt(String(((latitude + 90) / 180) * data.height - 0.5));
  const s = parseInt(String(i * (a - 1) + 4 * r)) + 3;

  return data.data[s] > 90;
}

// Récupère les données de l'image
const getImageData = (image: any) => {
  const element = document.createElement('canvas').getContext('2d');

  if (element) {
    return (
      (element.canvas.width = image.width),
      (element.canvas.height = image.height),
      element.drawImage(image, 0, 0, image.width, image.height),
      element.getImageData(0, 0, image.width, image.height)
    );
  }
};

// Calcule la position des points
const computeDotPosition = (latitude: number, longitude: number, radius: number) => {
  const vector = new THREE.Vector3();

  const vertical = (90 - latitude) * THREE.MathUtils.DEG2RAD;
  const horizontal = (longitude + 180) * THREE.MathUtils.DEG2RAD;

  return (
    vector.set(
      -radius * Math.sin(vertical) * Math.cos(horizontal),
      radius * Math.cos(vertical),
      radius * Math.sin(vertical) * Math.sin(horizontal)
    ),
    vector
  );
};

const animate = (): void => {
  requestAnimationFrame(animate);
  render();
};

const render = (): void => {
  renderer.render(scene, camera);
};
</script>

<style scoped lang="postcss"></style>

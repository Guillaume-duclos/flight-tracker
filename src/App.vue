<template />

<script setup lang="ts">
import { onMounted } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Group } from 'three';
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
  let rotation = euler;
  const offset = new Date().getTimezoneOffset() || 0;
  rotation.y = euler.y + Math.PI * (offset / 720);
  objectsGroup.rotation.copy(rotation);

  scene.add(objectsGroup);

  // Mise en place d'orbite control
  const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
  controls.maxDistance = 100;
  controls.minDistance = 30;

  // Création de la sphère représentant le glob
  const geometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xf5f6fa, transparent: true });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  globMap = new Image();
  globMap.src = './assets/glob-map.png';
  globMap.crossOrigin = 'Anonymous';
  globMap.onload = () => initDots();

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
  const i = [];

  for (let lat = -90; lat <= 90; lat += 180 / WORLD_DOT_ROWS) {
    const radius = Math.cos(Math.abs(lat) * THREE.MathUtils.DEG2RAD) * GLOBE_RADIUS;
    const circum = radius * Math.PI * 2 * 2;

    for (let r = 0; r < circum; r++) {
      const lng = (360 * r) / circum - 180;

      if (!visibilityForCoordinates(lat, lng, imageData)) continue;

      const s = computeDotPosition(lat, lng, GLOBE_RADIUS);
      object.position.set(s.x, s.y, s.z);

      const o = computeDotPosition(lat, lng, GLOBE_RADIUS + 5);
      object.lookAt(o.x, o.y, o.z);
      object.updateMatrix();
      i.push(object.matrix.clone());
    }
  }

  const dotGeometry = new THREE.CircleGeometry(WORLD_DOT_SIZE, 8);
  const dotMaterial = new THREE.MeshStandardMaterial({
    color: 0x2c3e50,
    transparent: true,
  });

  const dotMesh = new THREE.InstancedMesh(dotGeometry, dotMaterial, i.length);

  for (let l = 0; l < i.length; l++) {
    dotMesh.setMatrixAt(l, i[l]);
  }

  dotMesh.renderOrder = 3;
  objectsGroup.add(dotMesh);
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

<style scoped lang="postcss">
canvas {
  border: 2px solid red;
  width: 100%;
  height: 100%;
}
</style>

// Placeholder scene: swap in your own three.js code here.
// Use relative paths for textures, e.g. "threed-images/myTexture.jpg"
// (no leading slash, no Vite-only features like import.meta.env).
import * as THREE from "three";

const container = document.querySelector("#scene-container");
const width = container.clientWidth || 600;
const height = 400;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x14161a);

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x7cc4ff }),
);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(2, 3, 4);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.4));

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

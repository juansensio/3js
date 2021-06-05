import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// create a scene
const scene = new THREE.Scene();

// create a visible object -> mesh (geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// create a camera
const width = 800,
  height = 600;
const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
camera.position.set(0, 0, 3);
camera.lookAt(cube.position);
scene.add(camera);

// create a renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(width, height);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// animations
const clock = new THREE.Clock();
const tick = () => {
  // how many seconds since the clock was stantiated
  const elapsedTime = clock.getElapsedTime();

  // update controls to have damping
  controls.update();

  // render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();

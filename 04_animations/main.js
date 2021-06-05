import "./style.css";
import * as THREE from "three";

// create a scene
const scene = new THREE.Scene();

// create a visible object -> mesh (geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// create a camera
const width = 800,
  height = 600;
const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
camera.position.set(0, 0, 3);
scene.add(camera);

// create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);

// 3js clock
const clock = new THREE.Clock();

// animations
let time = Date.now();
const tick = () => {
  // using native js
  // const currentTime = Date.now();
  // const dt = currentTime - time;
  // time = currentTime;

  // how many seconds since the clock was stantiated
  const elapsedTime = clock.getElapsedTime();

  // update objects
  //cube.rotation.y += 0.001 * dt;
  // cube.rotation.y = elapsedTime;
  // cube.position.y = Math.sin(elapsedTime);
  // cube.position.x = Math.cos(elapsedTime);

  camera.position.x = Math.cos(elapsedTime);
  camera.position.y = Math.sin(elapsedTime);
  camera.lookAt(cube.position);

  // render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();

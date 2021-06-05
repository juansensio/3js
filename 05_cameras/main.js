import "./style.css";
import * as THREE from "three";

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

// orthographic
// const ar = width / height;
// const camera = new THREE.OrthographicCamera(-ar, ar, 1, -1, 1, 100);

// perspective
const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
camera.position.set(0, 0, 3);
camera.lookAt(cube.position);
scene.add(camera);

// control camera with mouse
const cursor = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
  // pixel value in x
  //console.log(e.clientX);

  // normalize with viewport size
  cursor.x = e.clientX / width - 0.5;
  cursor.y = 0.5 - e.clientY / height;

  //console.log(cursor);
});

// create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);

// 3js clock
const clock = new THREE.Clock();

// animations
const tick = () => {
  // how many seconds since the clock was stantiated
  const elapsedTime = clock.getElapsedTime();

  // update camera position
  camera.position.x = 3 * Math.sin(cursor.x * Math.PI * 2);
  camera.position.z = 3 * Math.cos(cursor.x * Math.PI * 2);
  camera.position.y = cursor.y * 3;
  camera.lookAt(cube.position);

  // render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();

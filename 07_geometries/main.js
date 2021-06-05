import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// create a scene
const scene = new THREE.Scene();

// create a cube
//const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);

// custom geometry
const positions = new Float32Array([
  0,
  0,
  0, // vertex 1 (x, y, z)
  0,
  1,
  0, // vertex 2 (x, y, z)
  1,
  0,
  0, // vertex 3 (x, y, z)
]);
const attribute = new THREE.BufferAttribute(positions, 3);
const geometry = new THREE.BufferGeometry();
// shaders have different attributes, use this as positions
geometry.setAttribute("position", attribute);

const count = 50; // number of triangles
const positions2 = new Float32Array(count * 3 * 3); // each triangle has 3 vertices with 3 values (x, y, z)
for (let i = 0; i < count * 3 * 3; i++) {
  positions2[i] = 3 * (Math.random() - 0.5);
}
const attribute2 = new THREE.BufferAttribute(positions2, 3);
geometry.setAttribute("position", attribute2);

// mejor performance si definimos vérices y pasamos los índices
// en vez de repetir vértices:
// geometry.setAttribute("indices", attribute2);

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true, // visualize triangles
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// create a camera
let width = window.innerWidth,
  height = window.innerHeight;

// change dimensions if window is resized
window.addEventListener("resize", (e) => {
  // get new dimensions
  width = window.innerWidth;
  height = window.innerHeight;

  // uppdate camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

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
// limitar el pixel ratio a 2 para evitar problemas
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

// full screen on double ckilck
// (no va en safari, user webkit)
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

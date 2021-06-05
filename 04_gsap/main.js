import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

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

// gsap
gsap.to(cube.position, { duration: 1, delay: 1, x: 2 });
gsap.to(cube.position, { duration: 1, delay: 2, x: 0 });

// animations
const tick = () => {
  // render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();

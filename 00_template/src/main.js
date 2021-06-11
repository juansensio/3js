import "../styles/style.css";

import * as THREE from "three";
import sphere from "./objects/sphere";
import floor from "./objects/floor";
import { ambientLight, directionalLight } from "./lights";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";

const scene = new THREE.Scene();

scene.add(sphere, floor);
scene.add(ambientLight, directionalLight);
scene.add(camera);

const clock = new THREE.Clock();
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

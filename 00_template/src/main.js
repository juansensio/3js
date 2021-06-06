import "../styles/style.css";

import * as THREE from "three";
import house from "./objects/house";
import floor from "./objects/floor";
import { ambientLight, moonLight } from "./lights";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";

const scene = new THREE.Scene();

scene.add(house, floor);
scene.add(ambientLight, moonLight);
scene.add(camera);

const clock = new THREE.Clock();
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

import "../styles/style.css";

import * as THREE from "three";
import floor from "./objects/floor";
import { ambientLight, directionalLight } from "./lights";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import { load_model, mixer } from "./models";

const scene = new THREE.Scene();

scene.add(floor);
scene.add(ambientLight, directionalLight);
scene.add(camera);

// models

load_model(scene);

const clock = new THREE.Clock();
let previousTime = 0;
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  if (mixer) mixer.update(deltaTime);

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

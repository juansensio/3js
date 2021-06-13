import "../styles/style.css";

import * as THREE from "three";
import { directionalLight } from "./lights";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import load_model from "./models";
import { scene } from "./scene";

//scene.add(sphere);
scene.add(directionalLight);
scene.add(camera);

load_model(scene);

const clock = new THREE.Clock();
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

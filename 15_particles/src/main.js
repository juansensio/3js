import "../styles/style.css";

import * as THREE from "three";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import particles from "./particles";

const scene = new THREE.Scene();

scene.add(particles);

scene.add(camera);

const clock = new THREE.Clock();
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

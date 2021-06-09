import "../styles/style.css";

import * as THREE from "three";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import { points, generateGalaxy, parameters } from "./galaxy";
import { gui } from "./debug";

const scene = new THREE.Scene();

generateGalaxy(scene);

gui
  .add(parameters, "count")
  .min(100)
  .max(1000000)
  .step(100)
  .onFinishChange(() => generateGalaxy(scene));
gui
  .add(parameters, "size")
  .min(0.001)
  .max(0.1)
  .step(0.001)
  .onFinishChange(() => generateGalaxy(scene));
gui
  .add(parameters, "radius")
  .min(0.01)
  .max(20)
  .step(0.01)
  .onFinishChange(() => generateGalaxy(scene));
gui
  .add(parameters, "branches")
  .min(2)
  .max(20)
  .step(1)
  .onFinishChange(() => generateGalaxy(scene));
gui
  .add(parameters, "spin")
  .min(-5)
  .max(5)
  .step(0.01)
  .onFinishChange(() => generateGalaxy(scene));
gui
  .add(parameters, "randomness")
  .min(0)
  .max(1)
  .step(0.01)
  .onFinishChange(() => generateGalaxy(scene));
gui
  .add(parameters, "power")
  .min(1)
  .max(10)
  .step(1)
  .onFinishChange(() => generateGalaxy(scene));
gui
  .addColor(parameters, "insideColor")
  .onFinishChange(() => generateGalaxy(scene));
gui
  .addColor(parameters, "outsideColor")
  .onFinishChange(() => generateGalaxy(scene));

scene.add(camera);

const clock = new THREE.Clock();
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

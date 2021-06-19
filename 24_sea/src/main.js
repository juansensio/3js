import "../styles/style.css";

import * as THREE from "three";
import sea from "./sea";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";

const scene = new THREE.Scene();

scene.add(sea);

scene.add(camera);

const clock = new THREE.Clock();
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  sea.material.uniforms.uTime.value = elapsedTime;
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

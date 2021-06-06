import * as THREE from "three";
import controls from "./controls";
import renderer from "./renderer";
import camera from "./camera";
import sphere from "./objects/sphere";
import plane from "./objects/plane";
import torus from "./objects/torus";

const clock = new THREE.Clock();

const tick = (scene) => {
  // how many seconds since the clock was stantiated
  const elapsedTime = clock.getElapsedTime();

  // animate objects
  sphere.rotation.y = 0.1 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  sphere.rotation.x = 0.15 * elapsedTime;
  plane.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // update controls to have damping
  controls.update();

  // render
  renderer.render(scene, camera);

  window.requestAnimationFrame(() => tick(scene));
};

export default tick;

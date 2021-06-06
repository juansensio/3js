import * as THREE from "three";
import controls from "./controls";
import renderer from "./renderer";
import camera from "./camera";
import cube from "./cube";

const clock = new THREE.Clock();

const tick = (scene) => {
  // how many seconds since the clock was stantiated
  const elapsedTime = clock.getElapsedTime();

  cube.rotation.y = 0.3 * elapsedTime;

  // update controls to have damping
  controls.update();

  // render
  renderer.render(scene, camera);

  window.requestAnimationFrame(() => tick(scene));
};

export default tick;

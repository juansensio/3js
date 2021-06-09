import "../styles/style.css";

import * as THREE from "three";
import { s1, s2, s3 } from "./objects";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import raycaster from "./raycaster";

const scene = new THREE.Scene();

scene.add(s1, s2, s3);
scene.add(camera);

const clock = new THREE.Clock();
const objects = [s1, s2, s3];
const update = () => {
  const elapsedTime = clock.getElapsedTime();

  s1.position.y = Math.sin(elapsedTime * 0.2);
  s2.position.y = Math.sin(elapsedTime);
  s3.position.y = Math.sin(elapsedTime * 1.8);

  const interesects = raycaster.intersectObjects(objects);

  objects.forEach((object) => {
    object.material.color.set("#ff0000");
  });

  interesects.forEach((intersect) => {
    intersect.object.material.color.set("#0000ff");
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

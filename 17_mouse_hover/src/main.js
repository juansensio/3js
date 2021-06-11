import "../styles/style.css";

import * as THREE from "three";
import { s1, s2, s3 } from "./objects";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import mouse from "./mouse";

const scene = new THREE.Scene();

scene.add(s1, s2, s3);
scene.add(camera);

const clock = new THREE.Clock();
const objects = [s1, s2, s3];
const raycaster = new THREE.Raycaster();
let currentIntersect = null;

window.addEventListener("click", (e) => {
  if (currentIntersect) {
    if (currentIntersect.object == s1) console.log("click object 1");
    if (currentIntersect.object == s2) console.log("click object 2");
    if (currentIntersect.object == s3) console.log("click object 3");
  }
});

const update = () => {
  const elapsedTime = clock.getElapsedTime();

  s1.position.y = Math.sin(elapsedTime * 0.2);
  s2.position.y = Math.sin(elapsedTime);
  s3.position.y = Math.sin(elapsedTime * 1.8);

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(objects);

  objects.forEach((object) => {
    object.material.color.set("#ff0000");
  });

  intersects.forEach((intersect) => {
    intersect.object.material.color.set("#0000ff");
  });

  if (intersects.length) {
    if (currentIntersect == null) {
      console.log("mouse enter");
    }
    currentIntersect = intersects[0];
  } else {
    if (currentIntersect) {
      console.log("mouse leave");
    }
    currentIntersect = null;
  }

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

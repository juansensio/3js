import "../styles/style.css";

import * as THREE from "three";
import house from "./objects/house";
import floor from "./objects/floor";
import { ghosts, update_ghosts } from "./objects/ghosts";
import { ambientLight, doorLight, moonLight } from "./lights";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import settings from "./settings";

const scene = new THREE.Scene();

scene.add(house, floor, ghosts);

house.add(doorLight);
scene.add(ambientLight, moonLight);

scene.add(camera);

const fog = new THREE.Fog(settings.fogColor, 1, 15);
scene.fog = fog;

const clock = new THREE.Clock();
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  update_ghosts(elapsedTime);
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

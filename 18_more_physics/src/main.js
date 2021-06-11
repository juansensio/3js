import "../styles/style.css";

import * as THREE from "three";
import createSphere from "./objects/sphere";
import createBox from "./objects/box";
import floor from "./objects/floor";
import { ambientLight, directionalLight } from "./lights";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import { parameters } from "./debug";
import CANNON from "cannon";

// scene

const scene = new THREE.Scene();
scene.add(ambientLight, directionalLight);
scene.add(camera);

// physics

const world = new CANNON.World();
world.gravity.set(0, -9.81, 0);
// improve performance with:
world.broadphase = new CANNON.SAPBroadphase(world);
world.allowSleep = true;
const defaultMaterial = new CANNON.Material("default");
const contactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  {
    friction: 0.1,
    restitution: 0.9,
  }
);
world.addContactMaterial(contactMaterial);
world.defaultContactMaterial = contactMaterial;

// objects

const spheres = [],
  boxes = [];

spheres.push(createSphere(0.5, { x: 0, y: 3, z: 0 }));

spheres.forEach(({ mesh, body }) => {
  scene.add(mesh);
  world.add(body);
});

scene.add(floor.mesh);
world.addBody(floor.body);

parameters.createSphere = () => {
  const sphere = createSphere(Math.random() * 0.5, {
    x: Math.random() - 0.5,
    y: 3,
    z: Math.random() - 0.5,
  });
  scene.add(sphere.mesh);
  world.add(sphere.body);
  spheres.push(sphere);
};

parameters.createBox = () => {
  const box = createBox(Math.random(), Math.random(), Math.random(), {
    x: Math.random() - 0.5,
    y: 3,
    z: Math.random() - 0.5,
  });
  scene.add(box.mesh);
  world.add(box.body);
  boxes.push(box);
};

// update

const clock = new THREE.Clock();
let oldElapsedTime = 0;
const update = () => {
  // compute dt
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = elapsedTime;

  // update physics
  world.step(1 / 60, deltaTime, 3);
  spheres.forEach((sphere) => {
    sphere.mesh.position.copy(sphere.body.position);
  });
  boxes.forEach((box) => {
    box.mesh.position.copy(box.body.position);
    box.mesh.quaternion.copy(box.body.quaternion);
  });
  // update scene
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

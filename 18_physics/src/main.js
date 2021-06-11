import "../styles/style.css";

import * as THREE from "three";
import sphere from "./objects/sphere";
import floor from "./objects/floor";
import { ambientLight, directionalLight } from "./lights";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import CANNON from "cannon";

const scene = new THREE.Scene();

scene.add(sphere, floor);
scene.add(ambientLight, directionalLight);
scene.add(camera);

// physics world

const world = new CANNON.World();
world.gravity.set(0, -9.81, 0);

// create a body

const sphereShape = new CANNON.Sphere(0.5);
const sphereBody = new CANNON.Body({
  mass: 1,
  position: new CANNON.Vec3(0, 3, 0),
  shape: sphereShape,
});
world.addBody(sphereBody);

const floorShape = new CANNON.Plane();
const floorBody = new CANNON.Body();
floorBody.mass = 0;
floorBody.addShape(floorShape);
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2);
world.addBody(floorBody);

// create materials

// const concreteMaterial = new CANNON.Material("concrete");
// const plasticMaterial = new CANNON.Material("plastic");
// const contactMaterial = new CANNON.ContactMaterial(
//   concreteMaterial,
//   plasticMaterial,
//   {
//     friction: 0.1,
//     restitution: 0.9,
//   }
// );
// world.addContactMaterial(contactMaterial);
// sphereBody.material = plasticMaterial;
// floorBody.material = concreteMaterial;

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
// sphereBody.material = contactMaterial;
// floorBody.material = contactMaterial;
world.defaultContactMaterial = contactMaterial;

const clock = new THREE.Clock();
let oldElapsedTime = 0;
const update = () => {
  // compute dt
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = elapsedTime;

  // update physics world
  world.step(1 / 60, deltaTime, 3);

  // update sphere
  // sphere.position.x = sphereBody.position.x;
  // sphere.position.y = sphereBody.position.y;
  // sphere.position.z = sphereBody.position.z;
  sphere.position.copy(sphereBody.position);

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

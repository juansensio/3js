import "../style.css";
import * as THREE from "three";
import camera from "./camera";
import renderer from "./renderer";
import tick from "./animations";
import cube from "./cube";
import plane from "./plane";
import {
  ambientLight,
  directionalLight,
  hemisphereLight,
  pointLight,
  rectAreaLight,
  spotLight,
  hemisphereLightHelper,
  pointLightHelper,
  spotLightHelper,
  rectAreaLightHelper,
} from "./lights";

// create a scene
const scene = new THREE.Scene();

// objects
scene.add(cube, plane);

// lights
// scene.add(ambientLight);
// scene.add(directionalLight);
// scene.add(hemisphereLight);
scene.add(pointLight);
scene.add(rectAreaLight);
scene.add(spotLight);
scene.add(spotLight.target); // required to change orientation

// helpers
scene.add(pointLightHelper);
scene.add(spotLightHelper);
scene.add(rectAreaLightHelper);

// create a camera
camera.lookAt(cube.position);
scene.add(camera);

// renderer
renderer.render(scene, camera);

// animations
tick(scene);

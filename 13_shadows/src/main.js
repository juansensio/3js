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
  directionalLightCameraHelper,
  spotLight,
  spotLightCameraHelper,
  pointLight,
  pointLightCameraHelper,
} from "./lights";

// create a scene
const scene = new THREE.Scene();

// objects
scene.add(cube, plane);

// lights
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(spotLight);
scene.add(spotLight.target);
scene.add(pointLight);

scene.add(directionalLightCameraHelper);
scene.add(spotLightCameraHelper);
scene.add(pointLightCameraHelper);

// create a camera
camera.lookAt(cube.position);
scene.add(camera);

// renderer
renderer.render(scene, camera);

// animations
tick(scene);

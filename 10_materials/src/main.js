import "../style.css";
import * as THREE from "three";
import sphere from "./objects/sphere";
import plane from "./objects/plane";
import torus from "./objects/torus";
import camera from "./camera";
import renderer from "./renderer";
import tick from "./animations";
import { ambientLight, pointLight } from "./lights";

// create a scene
const scene = new THREE.Scene();

// objects
sphere.position.x = -1.5;
torus.position.x = 1.5;
scene.add(sphere, plane, torus);

// lights
scene.add(ambientLight, pointLight);

// create a camera
scene.add(camera);
camera.lookAt(sphere.position);

// renderer
renderer.render(scene, camera);

// animations
tick(scene);

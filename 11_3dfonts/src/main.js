import "../style.css";
import * as THREE from "three";
import camera from "./camera";
import renderer from "./renderer";
import tick from "./animations";
import load_font from "./fonts";
import load_torus from "./objects/torus";

// create a scene
const scene = new THREE.Scene();

// objects
load_font(scene);
load_torus(scene);

// create a camera
scene.add(camera);

// renderer
renderer.render(scene, camera);

// animations
tick(scene);

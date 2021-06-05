import "../style.css";
import * as THREE from "three";
import { gui, parameters } from "./debug";
import cube from "./cube";
import camera from "./camera";
import renderer from "./renderer";
import settings from "./settings";
import tick from "./animations";

// create a scene
const scene = new THREE.Scene();

// objects
scene.add(cube);
//gui.add(cube.position, "y", -3, 3, 0.01);
//gui.add(cube.position, "x", -3, 3, 0.01);
//gui.add(cube.position, "z", -3, 3, 0.01);
gui.add(cube.position, "y").min(-3).max(3).step(0.01).name("red cube Y");
gui.add(cube, "visible");
gui.add(cube.material, "wireframe");
gui
  .addColor(parameters, "color")
  .onChange(() => cube.material.color.set(parameters.color));
gui.add(parameters, "spin");

// create a camera
scene.add(camera);
camera.lookAt(cube.position);

// renderer
renderer.render(scene, camera);

// animations
tick(scene);

// full screen
//settings.enableFullScreen();

import * as THREE from "three";
import { gui } from "./debug";

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
// directionalLight.shadow.camera.left = -7;
// directionalLight.shadow.camera.top = 7;
// directionalLight.shadow.camera.right = 7;
// directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(0.25, 3, -2.25);
directionalLight.shadow.normalBias = 0.05

gui.add(directionalLight, "intensity").min(0).max(10).step(0.001);
gui.add(directionalLight.position, "x").min(-5).max(5).step(0.001);
gui.add(directionalLight.position, "y").min(-5).max(5).step(0.001);
gui.add(directionalLight.position, "z").min(-5).max(5).step(0.001);

export { ambientLight, directionalLight };

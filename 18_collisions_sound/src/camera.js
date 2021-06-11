import * as THREE from "three";
import settings from "./settings";

const { width, height } = settings;

// change dimensions if window is resized
window.addEventListener("resize", (e) => {
  // uppdate camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 100);
camera.position.set(4, 2, 5);

export default camera;

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
camera.position.set(1, 1, 1);

export default camera;

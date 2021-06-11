import * as THREE from "three";
import settings from "./settings";

const { width, height, canvas } = settings;

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(width, height);
// limitar el pixel ratio a 2 para evitar problemas
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// activate shadows
//renderer.shadowMap.enabled = true;
//renderer.shadowMap.type = THREE.PCFShadowMap; // se ve mejor, pero menos performant que el basico

// change dimensions if window is resized
window.addEventListener("resize", (e) => {
  // update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

export default renderer;

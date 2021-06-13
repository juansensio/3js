import * as THREE from "three";
import { gui } from "./debug";
import settings from "./settings";
import { updateMaterials } from "./scene";

const { width, height, canvas } = settings;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setSize(width, height);
// limitar el pixel ratio a 2 para evitar problemas
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// activate shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap; // se ve mejor, pero menos performant que el basico

// same lights in blender and threejs
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 3;

gui
  .add(renderer, "toneMapping", {
    No: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhart: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACES: THREE.ACESFilmicToneMapping,
  })
  .onFinishChange((value) => {
    renderer.toneMapping = Number(value);
    updateMaterials();
  });

gui.add(renderer, "toneMappingExposure").min(0).max(10).step(0.001);

// change dimensions if window is resized
window.addEventListener("resize", (e) => {
  // update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

export default renderer;

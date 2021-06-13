import * as THREE from "three";
import environmentMapTexture from "./textures";
import { gui } from "./debug";

const scene = new THREE.Scene();
scene.background = environmentMapTexture;
// apply env map to all objects in scene that support env maps
scene.environment = environmentMapTexture;

const updateMaterials = () => {
  scene.traverse((child) => {
    if (
      child instanceof THREE.Mesh &&
      child.material instanceof THREE.MeshStandardMaterial
    ) {
      //child.material.envMap = environmentMapTexture;
      child.material.envMapIntensity = debugParams.envMapIntensity;
      child.material.needsUpdate = true;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
};

const debugParams = {
  envMapIntensity: 5,
};

gui
  .add(debugParams, "envMapIntensity")
  .min(0)
  .max(10)
  .step(0.001)
  .onChange(updateMaterials);

export { scene, updateMaterials };

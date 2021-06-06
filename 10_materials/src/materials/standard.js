import * as THREE from "three";
import {
  doorColorTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorRoughnessTexture,
  doorNormalTexture,
  doorAlphaTexture,
} from "../textures";

// PBR
const material = new THREE.MeshStandardMaterial();

// do not use with metalness or roughness textures !
// material.metalness = 0.45;
// material.roughness = 0.65;

material.map = doorColorTexture;
// aomap requires uv2 attribure in geometry !
material.aoMap = doorAmbientOcclusionTexture;
material.aoMapIntensity = 2;

// may require more vertices (add subdivisions in geometry)
material.displacementMap = doorHeightTexture;
material.displacementScale = 0.05;

material.metalnessMap = doorMetalnessTexture;
material.roughnessMap = doorRoughnessTexture;

material.normalMap = doorNormalTexture;
material.normalScale.set(0.5, 0.5);

material.alphaMap = doorAlphaTexture;
material.transparent = true;

export default material;

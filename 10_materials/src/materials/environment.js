import * as THREE from "three";
import { environmentMapTexture } from "../textures";
import { gui } from "../debug";

// PBR
const material = new THREE.MeshStandardMaterial();

// do not use with metalness or roughness textures !
material.metalness = 0.45;
material.roughness = 0.65;

material.envMap = environmentMapTexture;

gui.add(material, "metalness").min(0).max(1).step(0.0001);
gui.add(material, "roughness").min(0).max(1).step(0.0001);

export default material;

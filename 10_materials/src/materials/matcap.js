import * as THREE from "three";
import { matcapTexture } from "../textures";

// mesh matcap material
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcapTexture;

export default material;

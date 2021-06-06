import * as THREE from "three";
import { gradientTexture } from "../textures";

const material = new THREE.MeshToonMaterial();

gradientTexture.minFilter = THREE.NearestFilter;
gradientTexture.magFilter = THREE.NearestFilter;
gradientTexture.mipmaps = false;

material.gradientMap = gradientTexture;

export default material;

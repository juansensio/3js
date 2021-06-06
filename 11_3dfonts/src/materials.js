import * as THREE from "three";
import { matcapTexture } from "./textures";

const material = new THREE.MeshMatcapMaterial({
  matcap: matcapTexture,
});

export default material;

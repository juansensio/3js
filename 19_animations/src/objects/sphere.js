import * as THREE from "three";
import environmentMapTexture from "../textures";

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
  })
);
sphere.castShadow = true;
sphere.position.y = 0.5;

export default sphere;

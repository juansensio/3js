import * as THREE from "three";

// Temporary sphere
const house = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({ roughness: 0.7 })
);
house.position.y = 1;

export default house
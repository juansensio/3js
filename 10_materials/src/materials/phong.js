import * as THREE from "three";

// less performance than lambert,
// but can add shininess and specularity

const material = new THREE.MeshPhongMaterial();
material.shininess = 100;
material.specular = new THREE.Color(0x1188ff);

export default material;

import * as THREE from "three";
import material from "./materials";

const geometry = new THREE.PlaneGeometry(5, 5);
const plane = new THREE.Mesh(geometry, material);

// activate shadow
plane.receiveShadow = true;

plane.rotation.x = -Math.PI / 2;
plane.position.set(0, -0.8, 0);

export default plane;

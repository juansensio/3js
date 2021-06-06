import * as THREE from "three";
import material from "./materials";

const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
const cube = new THREE.Mesh(geometry, material);

export default cube;

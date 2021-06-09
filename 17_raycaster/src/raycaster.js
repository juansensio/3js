import * as THREE from "three";
import { s1, s2, s3 } from "./objects";

const raycaster = new THREE.Raycaster();

const rayOrigin = new THREE.Vector3(-3, 0, 0);

// should be a normalized vector
const rayDirection = new THREE.Vector3(10, 0, 0);
rayDirection.normalize();

raycaster.set(rayOrigin, rayDirection);

export default raycaster;

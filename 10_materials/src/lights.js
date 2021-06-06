import * as THREE from "three";

const ambientLight = new THREE.AmbientLight(0xfffffff, 0.5);
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(2, 3, 4);

export { ambientLight, pointLight };

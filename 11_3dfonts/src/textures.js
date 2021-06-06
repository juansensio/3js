import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("../textures/matcaps/1.png");

// se cargaran cada vez que importe ?? creo que no...
export { matcapTexture };

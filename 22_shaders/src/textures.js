import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const texture = textureLoader.load("/textures/flag-french.jpg");

export default texture;

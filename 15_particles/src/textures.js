import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const particleTexture = textureLoader.load("/textures/particles/2.png");

export default particleTexture;

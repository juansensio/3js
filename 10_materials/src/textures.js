import * as THREE from "three";

const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => console.log("start");
loadingManager.onLoad = () => console.log("load");
loadingManager.onProgress = () => console.log("progress");
loadingManager.onError = () => console.log("error");

const textureLoader = new THREE.TextureLoader(loadingManager);

const doorColorTexture = textureLoader.load("../textures/door/color.jpg");
const doorAlphaTexture = textureLoader.load("../textures/door/alpha.jpg");
const doorAmbientOcclusionTexture = textureLoader.load(
  "../textures/door/ambientOcclusion.jpg"
);
const doorHeightTexture = textureLoader.load("../textures/door/height.jpg");
const doorNormalTexture = textureLoader.load("../textures/door/normal.jpg");
const doorMetalnessTexture = textureLoader.load(
  "../textures/door/metalness.jpg"
);
const doorRoughnessTexture = textureLoader.load(
  "../textures/door/roughness.jpg"
);
const matcapTexture = textureLoader.load("../textures/matcaps/5.png");
const gradientTexture = textureLoader.load("../textures/gradients/3.jpg");

const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);

const environmentMapTexture = cubeTextureLoader.load([
  "../textures/environmentMaps/0/px.jpg",
  "../textures/environmentMaps/0/nx.jpg",
  "../textures/environmentMaps/0/py.jpg",
  "../textures/environmentMaps/0/ny.jpg",
  "../textures/environmentMaps/0/pz.jpg",
  "../textures/environmentMaps/0/nz.jpg",
]);

// se cargaran cada vez que importe ?? creo que no...
export {
  doorColorTexture,
  doorAlphaTexture,
  matcapTexture,
  doorAmbientOcclusionTexture,
  gradientTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorRoughnessTexture,
  doorNormalTexture,
  environmentMapTexture,
};

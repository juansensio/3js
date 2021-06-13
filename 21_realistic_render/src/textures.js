import * as THREE from "three";

const cubeTextureLoader = new THREE.CubeTextureLoader();

const environmentMapTexture = cubeTextureLoader.load([
  "/textures/environmentMaps/3/px.png",
  "/textures/environmentMaps/3/nx.png",
  "/textures/environmentMaps/3/py.png",
  "/textures/environmentMaps/3/ny.png",
  "/textures/environmentMaps/3/pz.png",
  "/textures/environmentMaps/3/nz.png",
]);
environmentMapTexture.encoding = THREE.sRGBEncoding;

export default environmentMapTexture;

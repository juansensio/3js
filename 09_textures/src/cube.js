import * as THREE from "three";

// const image = new Image()
// image.src = '../textures/door/color.jpg'
// const texture = new THREE.Texture(image)
// image.onload = () => {
//     texture.needsUpdate = true
// }

const loadingManager = new THREE.LoadingManager();
// loadingManager.onStart = () => console.log("start");
// loadingManager.onLoad = () => console.log("load");
// loadingManager.onProgress = () => console.log("progress");
// loadingManager.onError = () => console.log("error");

const textureLoader = new THREE.TextureLoader(loadingManager);

const colorTexture = textureLoader.load(
  "../textures/door/color.jpg"
  // loading events (pero mejor usar el manager)
  //   () => {
  //     console.log("load");
  //   },
  //   () => {
  //     console.log("progress");
  //   },
  //   () => {
  //     console.log("error");
  //   }
);

// un loader sirve para todas las texturas
const alphaTexture = textureLoader.load("../textures/door/alpha.jpg");
const heightTexture = textureLoader.load("../textures/door/height.jpg");
const normalTexture = textureLoader.load("../textures/door/normal.jpg");
const ambientOcclusionTexture = textureLoader.load(
  "../textures/door/ambientOcclusion.jpg"
);
const metalnessTexture = textureLoader.load("../textures/door/metalness.jpg");
const roughnessTexture = textureLoader.load("../textures/door/roughness.jpg");

// repeat texture
colorTexture.repeat.x = 2;
colorTexture.repeat.y = 2;
colorTexture.wrapS = THREE.RepeatWrapping;
colorTexture.wrapT = THREE.RepeatWrapping;

// offset
colorTexture.offset.x = 0.5;
colorTexture.offset.y = 0.5;

// rotation
colorTexture.rotation = 1; // radians

const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
// uv coordinates map pixels on the texture to vertices on the geometry
//console.log(geometry.attributes.uv);
//const geometry = new THREE.ConeGeometry(1, 1, 32);
const material = new THREE.MeshBasicMaterial({
  map: colorTexture,
});
const cube = new THREE.Mesh(geometry, material);

export default cube;

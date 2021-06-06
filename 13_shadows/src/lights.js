import * as THREE from "three";

// omnidireccional
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

// sol
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight.position.set(1, 0.25, 0);

// activate sahdow
directionalLight.castShadow = true;
// mejorar tamaño del shadow map (ojo performance ! potencias de 2)
directionalLight.shadow.mapSize.set(1024, 1024);
// ajustar cámara a la escena para tener mejor performance
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 6;
directionalLight.shadow.camera.top = 2;
directionalLight.shadow.camera.right = 2;
directionalLight.shadow.camera.bottom = -2;
directionalLight.shadow.camera.left = -2;
//directionalLight.shadow.camera.radius = 10; // blur

const directionalLightCameraHelper = new THREE.CameraHelper(
  directionalLight.shadow.camera
);
// poner a true para ajustar la cámara del shadow map (o poner en gui)
directionalLightCameraHelper.visible = false;

// spotlight

const spotLight = new THREE.SpotLight(0xffffff, 0.4, 10, Math.PI * 0.3);
spotLight.position.set(2, 2, 2);
spotLight.castShadow = true;
spotLight.shadow.mapSize.set(1024, 1024);
spotLight.shadow.camera.fov = 30;
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 8;

const spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
spotLightCameraHelper.visible = false;

// Point light

const pointLight = new THREE.PointLight(0xffffff, 0.3);
pointLight.castShadow = true;
pointLight.position.set(-1, 1, 0);
pointLight.shadow.mapSize.set(1024, 1024);
pointLight.shadow.camera.near = 0.1;
pointLight.shadow.camera.far = 5;

const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);
pointLightCameraHelper.visible = false;

export {
  ambientLight,
  directionalLight,
  directionalLightCameraHelper,
  spotLight,
  spotLightCameraHelper,
  pointLight,
  pointLightCameraHelper,
};

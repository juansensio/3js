import * as THREE from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

// omnidireccional
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

// sol
const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3);
directionalLight.position.set(1, 0.25, 0);

// un color desde arriba, otro desde abajo
const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000fff, 0.3);

const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2);
pointLight.position.set(1, -0.5, 1);

// como un foco de estudio rectangular
// only works with mesh standard or physical material
const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 5, 1, 1);
rectAreaLight.position.set(-1.5, 2, 1.5);
rectAreaLight.lookAt(new THREE.Vector3());

const spotLight = new THREE.SpotLight(0x78ff00, 1, 10, Math.PI * 0.1, 0.2, 1);
spotLight.position.set(2, 2, 4);
spotLight.target.position.x = -1.5; // requires adding the target to the scene

// HELPERS

const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  0.2
);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
// update helper
window.requestAnimationFrame(() => spotLightHelper.update());

const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);

export {
  ambientLight,
  directionalLight,
  hemisphereLight,
  pointLight,
  rectAreaLight,
  spotLight,
  hemisphereLightHelper,
  pointLightHelper,
  spotLightHelper,
  rectAreaLightHelper,
};

import * as THREE from "three";
import CANNON from "cannon";
import environmentMapTexture from "../textures";

const geom = new THREE.SphereGeometry(1, 32, 32);
const mat = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.4,
  envMap: environmentMapTexture,
});

const createSphere = (radius, position) => {
  // three.js mesh
  const mesh = new THREE.Mesh(geom, mat);
  mesh.scale.set(radius, radius, radius);
  mesh.castShadow = true;
  mesh.position.copy(position);
  // common.js body
  const shape = new CANNON.Sphere(radius);
  const body = new CANNON.Body({
    mass: 1,
    shape,
  });
  body.position.copy(position);
  return { mesh, body };
};

export default createSphere;

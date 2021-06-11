import * as THREE from "three";
import CANNON from "cannon";
import environmentMapTexture from "../textures";

const geom = new THREE.BoxBufferGeometry(1, 1, 1);
const mat = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.4,
  envMap: environmentMapTexture,
});

const createBox = (width, height, depth, position) => {
  // three.js mesh
  const mesh = new THREE.Mesh(geom, mat);
  mesh.scale.set(width, height, depth);
  mesh.castShadow = true;
  mesh.position.copy(position);
  // common.js body
  const shape = new CANNON.Box(
    new CANNON.Vec3(width / 2, height / 2, depth / 2)
  );
  const body = new CANNON.Body({
    mass: 1,
    shape,
  });
  body.position.copy(position);
  return { mesh, body };
};

export default createBox;

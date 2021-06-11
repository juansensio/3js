import * as THREE from "three";
import CANNON from "cannon";
import environmentMapTexture from "../textures";

const mesh = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({
    color: "#777777",
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
  })
);
mesh.receiveShadow = true;
mesh.rotation.x = -Math.PI * 0.5;

const floorShape = new CANNON.Plane();
const body = new CANNON.Body();
body.mass = 0;
body.addShape(floorShape);
body.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2);

export default { mesh, body };

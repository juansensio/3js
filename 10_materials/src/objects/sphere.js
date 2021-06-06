import * as THREE from "three";
import material from "../materials/material";

const sphere = new THREE.Mesh(
  // add more subdivisions for height  maps
  new THREE.SphereBufferGeometry(0.5, 64, 64),
  material
);

// required attribute `uv2` for ambient oclussion
sphere.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
);

export default sphere;

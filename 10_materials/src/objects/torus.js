import * as THREE from "three";
import material from "../materials/material";

const torus = new THREE.Mesh(
  // add more subdivisions for height   maps
  new THREE.TorusBufferGeometry(0.3, 0.2, 64, 128),
  material
);

// required attribute `uv2` for ambient oclussion
torus.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
);

export default torus;

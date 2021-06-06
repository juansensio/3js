import * as THREE from "three";
import material from "../materials/material";

// add more subdivisions for height  maps
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material);

// required attribute `uv2` for ambient oclussion
plane.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);

export default plane;

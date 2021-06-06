import * as THREE from "three";
import { doorColorTexture, doorAlphaTexture, matcapTexture } from "../textures";

// basic material
const material = new THREE.MeshBasicMaterial();

// textura
material.map = doorColorTexture;

// color
// esto no funciona
//material.color = "red";
// esto si
//material.color = new THREE.Color('purple')
//material.color = new THREE.Color("rgb(100,100,100)");
material.color.set(0xff00ff);

// traingulos
//material.wireframe = true;

// opacidad
// material.opacity = 1;
// material.transparent = true;

material.alphaMap = doorAlphaTexture;
material.transparent = true;
material.side = THREE.DoubleSide;

// normal material
// const material = new THREE.MeshNormalMaterial();
// material.flatShading = true; // see faces

// mesh matcap material
//const material = new THREE.MeshMatcapMaterial();
//material.matcap = matcapTexture;

export default material;

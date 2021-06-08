import * as THREE from "three";
import particleTexture from "./textures";

//const particleGeometry = new THREE.SphereBufferGeometry(1, 32, 32);

const particleGeometry = new THREE.BufferGeometry();
const count = 50000;
const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);
for (let i = 0; i < count * 3; i++) {
  positions[i] = 10 * (Math.random() - 0.5);
  colors[i] = Math.random();
}
particleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);
particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const particlesMaterial = new THREE.PointsMaterial({
  color: "white",
});
particlesMaterial.size = 0.05;
particlesMaterial.sizeAttenuation = true;
particlesMaterial.alphaMap = particleTexture;
particlesMaterial.transparent = true;

// every particles is created and drawn, puede haber solape
// se puede evitar de estas formas

// particlesMaterial.alphaTest = 0.001;
//particlesMaterial.depthTest = false; // no recomendado
particlesMaterial.depthWrite = false; // puede dar bugs a veces
particlesMaterial.blending = THREE.AdditiveBlending;

// activate vertex colors
particlesMaterial.vertexColors = true;

const particles = new THREE.Points(particleGeometry, particlesMaterial);

export default particles;

import * as THREE from "three";

//const particleGeometry = new THREE.SphereBufferGeometry(1, 32, 32);

const particleGeometry = new THREE.BufferGeometry();
const count = 5000;
const positions = new Float32Array(count * 3);
for (let i = 0; i < count * 3; i++) {
  positions[i] = 10 * (Math.random() - 0.5);
}
particleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  color: "red",
});
particlesMaterial.size = 0.05;
particlesMaterial.sizeAttenuation = true;

const particles = new THREE.Points(particleGeometry, particlesMaterial);

export default particles;

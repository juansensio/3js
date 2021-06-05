import "./style.css";
import * as THREE from "three";

// create a scene
const scene = new THREE.Scene();

// axis helper
const axisHelper = new THREE.AxisHelper();
scene.add(axisHelper);

// create a visible object -> mesh (geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = 0.7;
cube.position.y = -0.6;
cube.position.z = 1;
scene.add(cube);

// position inherits from Vector3
console.log(cube.position.length());
console.log(cube.position.normalize());
console.log(cube.position.length());
cube.position.set(0.7, -0.6, 1);

// scale
//cube.scale.x = 10;
cube.scale.set(2, 0.5, 0.5);

// rotation (order matters !)
cube.rotation.reorder("YXZ");
cube.rotation.x = Math.PI / 4;
cube.rotation.y = Math.PI / 4;
// alternative with quaternions

// create a camera
const width = 800,
  height = 600;
const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
// x, y, z -> right, up, out
camera.position.set(0, 0, 3);
scene.add(camera);

// position inherits from Vector3
console.log(cube.position.distanceTo(camera.position));

// camera movements
camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.lookAt(cube.position);

// create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
renderer.render(scene, camera);

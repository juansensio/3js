import "./style.css";
import * as THREE from "three";

// create a scene
const scene = new THREE.Scene();

// axis helper
const axisHelper = new THREE.AxisHelper();
scene.add(axisHelper);

// create group
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

group.scale.x = 0.5;
group.position.y = 0.5;
group.rotation.y = Math.PI / 4;

// create a camera
const width = 800,
  height = 600;
const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
// x, y, z -> right, up, out
camera.position.set(0, 0, 3);
scene.add(camera);

// create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
renderer.render(scene, camera);

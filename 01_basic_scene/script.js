// console.log(THREE);

// create a scene
const scene = new THREE.Scene();

// create a visible object -> mesh (geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// create a camera
const width = 800,
  height = 600;
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
// x, y, z -> right, up, out
camera.position.z = 3;
camera.position.x = 0;
camera.position.y = 0;
scene.add(camera);

// create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(width, height);
renderer.render(scene, camera);

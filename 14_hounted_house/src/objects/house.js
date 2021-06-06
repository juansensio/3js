import * as THREE from "three";
import {
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorColorTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorNormalTexture,
  doorRoughnessTexture,
  bricksColorTexture,
  bricksAmbientOcclusionTexture,
  bricksNormalTexture,
  bricksRoughnessTexture,
} from "../textures";

// group
const house = new THREE.Group();

// walls
const height = 3,
  depth = 4;
const walls = new THREE.Mesh(
  new THREE.BoxBufferGeometry(depth, height, depth),
  new THREE.MeshStandardMaterial({
    map: bricksColorTexture,
    aoMap: bricksAmbientOcclusionTexture,
    normalMap: bricksNormalTexture,
    roughnessMap: bricksRoughnessTexture,
  })
);
walls.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
);
walls.position.y = height / 2;

// roof
const roof_height = 2;
const roof = new THREE.Mesh(
  new THREE.ConeBufferGeometry(3.5, roof_height, 4),
  new THREE.MeshStandardMaterial({
    color: "#b35f45",
  })
);
roof.position.y = height + roof_height * 0.5;
roof.rotation.y = Math.PI * 0.25;

// door
const door_size = 2;
const door = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(door_size, door_size, 100, 100),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientOcclusionTexture,
    displacementMap: doorHeightTexture,
    displacementScale: 0.1,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  })
);
door.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
);
door.position.y = door_size * 0.5;
door.position.z = depth * 0.5 + 0.01;

// bushes
const bushes = new THREE.Group();
const bush_geom = new THREE.SphereBufferGeometry(1, 16, 16);
const bush_mat = new THREE.MeshStandardMaterial({
  color: "#89c854",
});
const bush1 = new THREE.Mesh(bush_geom, bush_mat);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(0.8, 0.2, 2.2);

const bush2 = new THREE.Mesh(bush_geom, bush_mat);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.4, 0.1, 2.1);

const bush3 = new THREE.Mesh(bush_geom, bush_mat);
bush3.scale.set(0.4, 0.4, 0.4);
bush3.position.set(-0.8, 0.1, 2.2);

const bush4 = new THREE.Mesh(bush_geom, bush_mat);
bush4.scale.set(0.15, 0.15, 0.15);
bush4.position.set(-1, 0.05, 2.6);

bushes.add(bush1, bush2, bush3, bush4);

// graveyard
const graves = new THREE.Group();
const grave_geom = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const grave_mat = new THREE.MeshStandardMaterial({ color: "#b2b6b1" });

for (let i = 0; i < 50; i++) {
  const angle = Math.random() * Math.PI * 2; // Random angle
  const radius = depth + 1 + Math.random() * 5; // Random radius
  const x = Math.cos(angle) * radius; // Get the x position using cosinus
  const z = Math.sin(angle) * radius; // Get the z position using sinus

  // Create the mesh
  const grave = new THREE.Mesh(grave_geom, grave_mat);

  // Position
  grave.position.set(x, 0.3, z);

  // Rotation
  grave.rotation.z = (Math.random() - 0.5) * 0.4;
  grave.rotation.y = (Math.random() - 0.5) * 0.4;

  grave.castShadow = true

  // Add to the graves container
  graves.add(grave);
}

house.add(walls, roof, door, bushes, graves);

walls.castShadow = true
bush1.castShadow = true
bush2.castShadow = true
bush3.castShadow = true
bush4.castShadow = true

export default house;

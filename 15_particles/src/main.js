import "../styles/style.css";

import * as THREE from "three";
import camera from "./camera";
import controls from "./controls";
import renderer from "./renderer";
import particles from "./particles";

const scene = new THREE.Scene();

scene.add(particles);

scene.add(camera);

const clock = new THREE.Clock();
const particlesPositions = particles.geometry.attributes.position;
const particlesPositionsArray = particlesPositions.array;
const update = () => {
  const elapsedTime = clock.getElapsedTime();
  // esto no es recomendado por temas de performance
  // en vez de usar el pointmaterial habría que hacer un custom shader
  for (let i = 0; i < particlesPositionsArray.length; i += 3) {
    const x = particlesPositionsArray[i];
    particlesPositionsArray[i + 1] = Math.sin(elapsedTime + x);
  }
  particlesPositions.needsUpdate = true;
  particles.geometry;
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(update);
};

update();

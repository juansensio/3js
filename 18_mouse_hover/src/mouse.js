import * as THREE from "three";
import settings from "./settings";

const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / settings.width) * 2 - 1;
  mouse.y = 1 - (e.clientY / settings.height) * 2;
});

export default mouse;

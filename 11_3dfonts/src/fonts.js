import * as THREE from "three";
import material from "./materials";
// on loader can load multiple fonts !
const fontLoader = new THREE.FontLoader();

export default function load_font(scene) {
  let text;
  fontLoader.load("../fonts/helvetiker_regular.typeface.json", (font) => {
    const bevelSize = 0.01,
      bevelThickness = 0.03;
    const textGeometry = new THREE.TextBufferGeometry("Juan Sensio", {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness,
      bevelSize,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    //const material = new THREE.MeshBasicMaterial({ wireframe: true });

    const text = new THREE.Mesh(textGeometry, material);

    // center text
    // textGeometry.computeBoundingBox();
    // textGeometry.translate(
    //   -(textGeometry.boundingBox.max.x - bevelSize) * 0.5, // Subtract bevel size
    //   -(textGeometry.boundingBox.max.y - bevelSize) * 0.5, // Subtract bevel size
    //   -(textGeometry.boundingBox.max.z - bevelThickness) * 0.5 // Subtract bevel thickness
    // );

    textGeometry.center();

    scene.add(text);
  });
}

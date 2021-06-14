import * as THREE from "three";
import testVertexShader from "./shaders/test/vertex.glsl?raw";
import testFragmentShader from "./shaders/test/fragment.glsl?raw";
import { gui } from "./debug";
import texture from "./textures";

const geom = new THREE.PlaneBufferGeometry(1, 1, 32, 32);

// adding attributes
const count = geom.attributes.position.count;
const randoms = new Float32Array(count);
for (let i = 0; i < count; i++) {
  randoms[i] = Math.random();
}
geom.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));

const mat = new THREE.ShaderMaterial({
  vertexShader: testVertexShader,
  fragmentShader: testFragmentShader,
  //wireframe: true,
  side: THREE.DoubleSide,
  // adding uniforms
  uniforms: {
    uFrequency: {
      value: new THREE.Vector2(10, 5),
    },
    uTime: {
      value: 0,
    },
    uColor: {
      value: new THREE.Color("orange"),
    },
    // uTexture: {
    //   value: texture,
    // },
  },
});

const mesh = new THREE.Mesh(geom, mat);

export default mesh;

import * as THREE from "three";
import waterVertexShader from "./shaders/water/vertex.glsl?raw";
import waterFragmentShader from "./shaders/water/fragment.glsl?raw";
import { gui } from "./debug";

const debugObject = {
  depthColor: "#186691",
  surfaceColor: "#9bd8ff",
};

const sea = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1, 128, 128),
  new THREE.ShaderMaterial({
    vertexShader: waterVertexShader,
    fragmentShader: waterFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uBigWavesElevation: { value: 0.06 },
      uBigWavesFrequency: { value: new THREE.Vector2(1.75, 0.5) },
      uBigWavesSpeed: { value: 0.75 },
      uSmallWavesIterations: { value: 4 },
      uSmallWavesFrequency: { value: 3 },
      uSmallWavesElevation: { value: 0.15 },
      uSmallWavesSpeed: { value: 0.2 },
      uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
      uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
      uColorOffset: { value: 0.08 },
      uColorMultiplier: { value: 10 },
    },
  })
);
sea.rotation.x = -Math.PI * 0.5;

gui
  .add(sea.material.uniforms.uBigWavesElevation, "value")
  .min(0)
  .max(1)
  .step(0.001)
  .name("uBigWavesElevation");

gui
  .add(sea.material.uniforms.uBigWavesFrequency.value, "x")
  .min(0)
  .max(10)
  .step(0.01)
  .name("uBigWavesFrequencyX");

gui
  .add(sea.material.uniforms.uBigWavesFrequency.value, "y")
  .min(0)
  .max(10)
  .step(0.01)
  .name("uBigWavesFrequencyY");

gui
  .add(sea.material.uniforms.uBigWavesSpeed, "value")
  .min(0)
  .max(4)
  .step(0.01)
  .name("uBigWavesSpeed");

gui
  .addColor(debugObject, "depthColor")
  .name("depthColor")
  .onChange(() =>
    sea.material.uniforms.uDepthColor.value.set(debugObject.depthColor)
  );
gui
  .addColor(debugObject, "surfaceColor")
  .name("surfaceColor")
  .onChange(() =>
    sea.material.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor)
  );

gui
  .add(sea.material.uniforms.uColorOffset, "value")
  .min(0)
  .max(1)
  .step(0.001)
  .name("uColorOffset");

gui
  .add(sea.material.uniforms.uColorMultiplier, "value")
  .min(0)
  .max(10)
  .step(0.01)
  .name("uColorMultiplier");

gui
  .add(sea.material.uniforms.uSmallWavesIterations, "value")
  .min(1)
  .max(10)
  .step(1)
  .name("uSmallWavesIterations");
gui
  .add(sea.material.uniforms.uSmallWavesFrequency, "value")
  .min(0)
  .max(30)
  .step(0.01)
  .name("uSmallWavesFrequency");
gui
  .add(sea.material.uniforms.uSmallWavesElevation, "value")
  .min(0)
  .max(1)
  .step(0.01)
  .name("uSmallWavesElevation");
gui
  .add(sea.material.uniforms.uSmallWavesSpeed, "value")
  .min(0)
  .max(4)
  .step(0.01)
  .name("uSmallWavesSpeed");

export default sea;

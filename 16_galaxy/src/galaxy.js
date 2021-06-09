import * as THREE from "three";

const parameters = {
  count: 100000,
  size: 0.01,
  radius: 3,
  branches: 3,
  spin: 1,
  randomness: 0.5,
  power: 3,
  insideColor: "#ff6030",
  outsideColor: "#1b3984",
};

let geometry = null,
  material = null,
  points = null;

const generateGalaxy = (scene) => {
  // remove old galaxy
  if (points !== null) {
    geometry.dispose();
    material.dispose();
    scene.remove(points);
  }

  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(parameters.count * 3);
  const colors = new Float32Array(parameters.count * 3);

  const colorInside = new THREE.Color(parameters.insideColor);
  const colorOutside = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;

    const radius = Math.random() * parameters.radius;
    const branchAngle =
      (2 * Math.PI * (i % parameters.branches)) / parameters.branches;
    const spinAngle = radius * parameters.spin;

    positions[i3] =
      radius * Math.sin(branchAngle + spinAngle) +
      Math.pow(Math.random(), parameters.power) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness;
    positions[i3 + 1] =
      Math.pow(Math.random(), parameters.power) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness;
    positions[i3 + 2] =
      radius * Math.cos(branchAngle + spinAngle) +
      Math.pow(Math.random(), parameters.power) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness;

    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  points = new THREE.Points(geometry, material);

  scene.add(points);
};

export { points, generateGalaxy, parameters };

import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// draco loader running in a worker

const draco_loader = new DRACOLoader(); // can run in a worker and wasm with:
draco_loader.setDecoderPath("/draco/"); // copy from node_modules/three/examples/js/libs/draco

const loader = new GLTFLoader();
loader.setDRACOLoader(draco_loader); // el loader funciona igual si cargamos algo que no es draco

const load_model = (scene) => {
  loader.load(
    //"/models/Duck/glTF/Duck.gltf",
    //"/models/Duck/glTF-Binary/Duck.glb",
    //"/models/Duck/glTF-Embedded/Duck.gltf",
    //"/models/FlightHelmet/glTF/FlightHelmet.gltf",
    //"/models/Duck/glTF-Draco/Duck.gltf",
    "/models/Fox/glTF/Fox.gltf",
    (gltf) => {
      console.log("success");
      //scene.add(gltf.scene.children[0]);

      // children are removed from model when added to the scene
      //       while (gltf.scene.children.length) {
      //         scene.add(gltf.scene.children[0]);
      //       }

      gltf.scene.scale.set(0.025, 0.025, 0.025);
      scene.add(gltf.scene);
    },
    () => console.log("progress"),
    () => console.log("error")
  );
};

export default load_model;

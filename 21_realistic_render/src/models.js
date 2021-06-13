import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// draco loader running in a worker
import { gui } from "./debug";
import { updateMaterials } from "./scene";

const draco_loader = new DRACOLoader(); // can run in a worker and wasm with:
draco_loader.setDecoderPath("/draco/"); // copy from node_modules/three/examples/js/libs/draco

const loader = new GLTFLoader();
loader.setDRACOLoader(draco_loader); // el loader funciona igual si cargamos algo que no es draco

const load_model = (scene) => {
  loader.load(
    //"/models/FlightHelmet/glTF/FlightHelmet.gltf",
    "/models/burger.glb",
    (gltf) => {
      console.log("success");
      gltf.scene.scale.set(0.25, 0.25, 0.25);
      gltf.scene.position.set(0, -1, 0);
      scene.add(gltf.scene);

      // update materials
      updateMaterials();

      gui
        .add(gltf.scene.rotation, "y")
        .min(-Math.PI)
        .max(Math.PI)
        .step(0.001)
        .name("rotation");
    },
    () => console.log("progress"),
    () => console.log("error")
  );
};

export default load_model;

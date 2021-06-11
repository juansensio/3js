import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import camera from "./camera";
import settings from "./settings";

const controls = new OrbitControls(camera, settings.canvas);
controls.enableDamping = true;

export default controls;

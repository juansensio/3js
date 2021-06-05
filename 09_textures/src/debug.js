import * as dat from "dat.gui";
import gsap from "gsap";
import cube from "./cube";

const gui = new dat.GUI({ closed: false });

// se abre y cierra con la tecla 'h'
gui.hide();

const parameters = {
  color: 0xff0000,
  spin: () => {
    gsap.to(cube.rotation, { duration: 1, y: cube.rotation.y + 10 });
  },
};

export { gui, parameters };

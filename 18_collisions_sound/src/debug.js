import * as dat from "dat.gui";

const gui = new dat.GUI({ closed: false });

// se abre y cierra con la tecla 'h'
//gui.hide();

const parameters = {
  createSphere: () => {},
  createBox: () => {},
  reset: () => {},
};

gui.add(parameters, "createSphere");
gui.add(parameters, "createBox");
gui.add(parameters, "reset");

export { gui, parameters };

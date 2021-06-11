import * as dat from "dat.gui";

const gui = new dat.GUI({ closed: false });

// se abre y cierra con la tecla 'h'
//gui.hide();

const parameters = {
  createSphere: () => {},
  createBox: () => {},
};

gui.add(parameters, "createSphere");
gui.add(parameters, "createBox");

export { gui, parameters };

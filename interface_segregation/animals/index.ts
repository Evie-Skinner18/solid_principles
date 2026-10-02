import { CuttleFish } from "./fish/CuttleFish";
import { Labrador } from "./dogs/Labrador";

const scaleColour = 'silver';
const furColour = 'red';

const cuttleFish = new CuttleFish(scaleColour);

cuttleFish.blob();

const betsey = new Labrador(furColour);
betsey.bark();

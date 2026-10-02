import { CuttleFish } from "./CuttleFish";

// todo chunk down the interface so different ideas are segregated
// this will be the good one
const scaleColour = 'silver';
const furColour = 'red';

const cuttleFish = new CuttleFish(scaleColour, furColour);

cuttleFish.blob();
cuttleFish.bark();
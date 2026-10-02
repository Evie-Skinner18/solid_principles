import { Fish } from "./Fish";

export class CuttleFish implements Fish {
    scaleColour: string;

    constructor(scaleColour: string) {
        this.scaleColour = scaleColour;
    }
    
    blob(): void {
        console.log('blob underwater!');
    }

    swim(): void {
        console.log('Just keep swimming');
    }
}
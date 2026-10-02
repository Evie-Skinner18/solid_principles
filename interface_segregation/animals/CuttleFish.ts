import { Fish } from "./Fish";

export class CuttleFish implements Fish {
    scaleColour: string;
    furColour: string;


    constructor(scaleColour: string, furColour: string) {
        this.scaleColour = scaleColour;
        this.furColour = furColour;        
    }
    
    blob(): void {
        console.log('blob underwater!');
    }

    swim(): void {
        console.log('Just keep swimming');
    }

    bark(): void {
        console.log('WOOF');
    }

    run(): void {
        console.log('chase me chasemechasemeeee');
    }

}
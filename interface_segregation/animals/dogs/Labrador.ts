import { Dog } from "./Dog";

export class Labrador implements Dog {
    furColour: string;

    constructor(furColour: string) {
        this.furColour = furColour;
    }

    bark(): void {
        console.log('WOOF');
    }

    run(): void {
        console.log('chase me chasemechasemeeee');
    }
}
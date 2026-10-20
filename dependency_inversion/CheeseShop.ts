import { PackagingMethod } from "./PackagingMethod";

export enum ShippingLocation {
    NorthernEurope,
    Gulf,
    CentralAmerica
}

// todo this concrete class depends on another concrete class. We want its dependency to be abstract
export class CheeseShop {
    private availableCheeses: string[];
    private packagingMethod: PackagingMethod;

   
    constructor(availableCheeses: string[]) {
        this.availableCheeses = availableCheeses;
        this.packagingMethod = new PackagingMethod();
    }

    public orderCheese(cheese: string, location: ShippingLocation): void {
        if(this.availableCheeses.includes(cheese)){
            console.log(`ordering a tasty ${cheese}!`);

            switch (location) {
                case ShippingLocation.NorthernEurope:
                    this.packagingMethod.packageInClingfilm();
                    break;
                case ShippingLocation.Gulf:
                    this.packagingMethod.packageInCoolBox();
                default:
                    this.packagingMethod.packageInPaper();
                    break;
            }
        } else {
            console.log(`${cheese} is not available soz`);
        }
    }
}
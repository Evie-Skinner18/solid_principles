import { Menu } from "./Menu";

export class VegetarianMenu implements Menu {
    getVegetarianItems(): String[] {
        return ['Egg on toast', 'Tomato soup'];
    }

    getPescatarianItems(): String[] {
        return ['Fish and chips', 'Anchovies in vinegar'];
    }

    getVeganItems(): String[] {
        return ['Baba ghannoush', 'Dhal'];
    } 
}
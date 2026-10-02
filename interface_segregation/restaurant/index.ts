import { VegetarianMenu } from "./VegetarianMenu";

// todo this is the bad one they will discuss
const veggieMenu = new VegetarianMenu();
const fishMenuItems = veggieMenu.getPescatarianItems();

console.log('Here are the fishy items on the veggie menu:')

fishMenuItems.forEach(item => {
    console.log(item);
})
import { WetherspoonsMenu } from "./WetherspoonsMenu";

// todo this is the bad one they will discuss
const spoonsMenu = new WetherspoonsMenu();
const fishMenuItems = spoonsMenu.getPescatarianItems();

console.log('Here are the fishy items on the Wetherspoons menu:')

fishMenuItems.forEach(item => {
    console.log(item);
})
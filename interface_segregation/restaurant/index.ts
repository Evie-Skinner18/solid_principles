import { WetherspoonsMenu } from "./WetherspoonsMenu";

// todo segregate the interface so Vicki can see the vegan menu items on their own
// if you get this done v quick talk with your partner about their codebase
// does it have code that breaks this principle?
const spoonsMenu = new WetherspoonsMenu();
const fishMenuItems = spoonsMenu.getPescatarianItems();

console.log('Here are the fishy items on the Wetherspoons menu:')

fishMenuItems.forEach(item => {
    console.log(item);
})

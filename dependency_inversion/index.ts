import { CheeseShop, ShippingLocation } from "./CheeseShop";


const eviesCheeseEmporium = new CheeseShop(['Gruyere', 'Emmental', 'Stilton']);
eviesCheeseEmporium.orderCheese('Stilton', ShippingLocation.CentralAmerica);
import { Thing } from "./thing";
import { Fleet } from "./fleet";
import { fileURLToPath } from "url";

let fleet = new Fleet();
let milk = new Thing("Get milk");
let obstacles = new Thing("Remove the obstacles");
let standUp = new Thing("Stand up");
let lunch = new Thing("Eat lunch");

standUp.complete();
lunch.complete();

fleet.add(milk);
fleet.add(obstacles);
fleet.add(standUp);
fleet.add(lunch);

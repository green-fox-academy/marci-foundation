import Dinosaur from "./Dinosaur";
import Cat from "./Cat";
import KoalaBear from "./KoalaBear";

const reptile = new Cat("Crocodile");
const mammal = new Dinosaur("Koala");
const bird = new KoalaBear("Parrot");

console.log("How do you breed?");
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);

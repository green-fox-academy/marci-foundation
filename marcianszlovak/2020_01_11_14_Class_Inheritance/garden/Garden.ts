import Plants from "./Plants";
import Flowers from "./Flowers";
import Trees from "./Trees";
export default class Garden {
  plants: Plants[];

  addPlants() {
    this.plants.push(new Flowers(0, "Yellow"));
    this.plants.push(new Flowers(0, "Blue"));
    this.plants.push(new Trees(0, "Purple"));
    this.plants.push(new Trees(0, "Orange"));
  }
  constructor() {
    this.plants = [];
    this.addPlants;
  }

  addWater(water: number) {
    console.log(`Watering with ${water}.`);

    let plantsThatNeedWater: number = 0;

    this.plants.forEach((currentItem: Plants) => {
      if (currentItem.plantNeedsWater()) {
        plantsThatNeedWater++;
      }
    });

    if (plantsThatNeedWater != 0) {
      this.plants.forEach((currentItem: Plants) => {
        if (currentItem.plantNeedsWater()) {
          currentItem.wateringPlants(water / plantsThatNeedWater);
        }
      });
    }
  }

  waterLevels() {
    this.plants.forEach((currentItem: Plants) => {
      if (currentItem.plantNeedsWater()) {
        console.log(
          `The ${currentItem.color} ${currentItem.constructor.name} needs water`
        );
      } else {
        console.log(
          `The ${currentItem.color} ${currentItem.constructor.name} doesn't need water`
        );
      }
    });
  }
}

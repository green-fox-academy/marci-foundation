import Plants from "./Plants";
import Flowers from "./Flowers";
import Trees from "./Trees";
export default class Garden {
  private plants: Plants[];

  addPlants() {
    this.plants.push(new Flowers(0, "Yellow")); // add a yellow flower with 0 currentWaterLevel
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
      this.plants.forEach((plants: Plants) => {
        if (plants.plantNeedsWater()) {
          plants.wateringPlants(water / plantsThatNeedWater);
        }
      });
    }
  }

  waterLevels() {
    this.plants.forEach((plants: Plants) => {
      if (plants.plantNeedsWater()) {
        console.log(
          `The ${plants.color} ${plants.constructor.name} needs water`
        );
      } else {
        console.log(
          `The ${plants.color} ${plants.constructor.name} doesn't need water`
        );
      }
    });
  }
}

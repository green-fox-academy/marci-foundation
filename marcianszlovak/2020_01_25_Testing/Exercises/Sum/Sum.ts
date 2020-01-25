export default class Add {
  /**
   * sum
   */
  public sum(...inputNumber: number[]) {
    return inputNumber.reduce((sum, inputNumber) => sum + inputNumber, 0);
  }
}

let summed = new Add();
summed.sum(4, 5, 6, 7, 6);
console.log(summed.sum(4, 5, 6, 7, 6));

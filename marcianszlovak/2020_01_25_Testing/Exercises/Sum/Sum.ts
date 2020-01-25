export default class Add {
  /**
   * sum
   */
  public sum(...inputNumber: number[]) {
    return inputNumber.reduce((sum, array) => sum + array, 0);
  }
}

let asd = new Add();
asd.sum(4, 5, 6, 7, 6);
console.log(asd.sum(4, 5, 6, 7, 6));

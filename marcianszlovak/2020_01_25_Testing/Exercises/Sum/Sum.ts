export default class Add {
  /**
   * sum
   */
  public sum(...inputNumber: number[]) {
    return inputNumber.reduce((sum, inputNumber) => sum + inputNumber, 0);
  }
}

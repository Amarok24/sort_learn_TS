export class CharCollection {
  constructor(public data: string) { }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const strArr = this.data.split("");

    const leftHand = strArr[leftIndex];
    strArr[leftIndex] = strArr[rightIndex];
    strArr[rightIndex] = leftHand;

    this.data = strArr.join("");
  }

}

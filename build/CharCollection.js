export class CharCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const strArr = this.data.split("");
        const leftHand = strArr[leftIndex];
        strArr[leftIndex] = strArr[rightIndex];
        strArr[rightIndex] = leftHand;
        this.data = strArr.join("");
    }
}
//# sourceMappingURL=CharCollection.js.map
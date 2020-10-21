"use strict";
class badSorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                if (typeof this.collection === "string") {
                }
            }
        }
    }
}
const badsorter = new badSorter([10, 3, -5, 0]);
badsorter.sort();
console.log(badsorter.collection);
//# sourceMappingURL=index_bad_code.js.map
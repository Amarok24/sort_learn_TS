export class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
//# sourceMappingURL=Sorter.js.map
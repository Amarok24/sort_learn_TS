// this class is bad code for learning purposes

class badSorter {

  // if sorting should work for additional type in future than this class
  // would need to be updated on several places

  constructor(public collection: number[] | string) { }


  sort(): void {
    const length: number = this.collection.length;
    // const { length } = this.collection; // equivalent, using destructuring assignment


    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // Type guard needed here, to check if collection is number[]
        if (this.collection instanceof Array) {
          // now it's guaranteed that  collection === number[]
          // and we have access to all properties and methods of Array
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // If collection is a string
        // "typeof" works for primitive types only: number, string, boolean, symbol
        // all other types (which have a constructor) need to be checked with "instanceof"
        if (typeof this.collection === "string") {
          // now it's guaranteed that  collection === string
          // and we have access to all properties and methods of String
        }

      }
    }

  } // end sort

}


const badsorter = new badSorter([10, 3, -5, 0]);
badsorter.sort();
console.log(badsorter.collection);

/*

class Sorter {
  collection: number[];

  constructor(arr: number[]) {
    this.collection = arr;
  }
}

// ==> shorter and 100% equivalent syntax:

class Sorter2 {
  constructor(public collection: number[]) {}
}

*/

// this is the good version
// see index_bad_code.ts for bad version


interface Sortable {
  length: number; // property names ARE relevant, they must match

  compare(leftIx: number, rightIx: number): boolean;
  swap(leftIx: number, rightIx: number): void;
  // but parameter names in an interface function are irrelevant
}


export class Sorter {

  // if sorting should work for additional type in future than this class
  // would need to be updated on several places

  constructor(public collection: Sortable) { }

  sort(): void {
    const length: number = this.collection.length;
    // const { length } = this.collection; // equivalent, using destructuring assignment


    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1);
        }

      }
    }

  } // end sort

}



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

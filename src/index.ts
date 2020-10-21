﻿import { Sorter } from "./Sorter.js";
import { NumbersCollection } from "./NumbersCollection.js";
import { CharCollection } from "./CharCollection.js";
import { LinkedList } from "./LinkedList.js";

console.log("hello from index.ts");


// NumbersCollection demo
const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
console.log(numCollection.data); // [ -5, 0, 3, 10 ]


// CharCollection demo
const charCollection = new CharCollection("Xaayb");
const sorter2 = new Sorter(charCollection);
sorter2.sort();
console.log(charCollection.data); // aabXy


// LinkedList demo
const list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(4);
const sorter3 = new Sorter(list);
sorter3.sort();
list.print();
/*
-10
-3
4
500
*/

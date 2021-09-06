import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

let numbersToSort = [9, 3, 2, 11, -5];
let stringToSort = 'Ribay'

const numbersCollection = new NumbersCollection(numbersToSort)
const charactersCollection = new CharactersCollection(stringToSort)
const linedList = new LinkedList();

numbersCollection.sort()
console.log(numbersCollection)

charactersCollection.sort()
console.log(charactersCollection)
// console.log(numbersCollection.data)
linedList.add(500)
linedList.add(-3)
linedList.add(0)
linedList.add(5)
linedList.sort()
linedList.print()

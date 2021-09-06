import {Sorter} from "./Sorter";

export class CharactersCollection extends Sorter{
    constructor(public data: string) {
        super()
    }
    get length() {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase())
    }
    swap(leftIndex: number, rightIndex: number) {
        let characters = this.data.split('')
        let temp = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = temp
        this.data = characters.join('')
    }

}

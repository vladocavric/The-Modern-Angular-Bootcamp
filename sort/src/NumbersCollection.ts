import {Sorter} from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data: number[]) {
        super()
    }

    get length() {
        return this.data.length
    }

    compare(leftHand: number, rightHand: number) {
        return this.data[leftHand] > this.data[rightHand]
    }

    swap(leftHand: number, rightHand: number) {
        let temp = this.data[leftHand]
        this.data[leftHand] = this.data[rightHand]
        this.data[rightHand] = temp
    }
}

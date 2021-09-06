import {Item} from "./Item";
// @ts-ignore
import faker from 'faker'
import {Mappable} from "./CustomMap";

export class User extends Item implements Mappable{
    name: string

    constructor(){
        super()
        this.name = faker.name.firstName()
    }
    markerContent() {
        return `<h2>User Name: ${this.name}</h2>`
    }
}

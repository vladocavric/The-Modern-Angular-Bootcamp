// @ts-ignore
import faker from 'faker'
import {Item} from "./Item";
import {Mappable} from "./CustomMap";

export class Company extends Item implements Mappable{
    name: string;
    catchPhrase: string;

    constructor() {
        super()
        this.name = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()

    }

    markerContent() {
        return `
        <div>
            <h1>Company Name: ${this.name}</h1>
            <h3>Catch Phrase: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}

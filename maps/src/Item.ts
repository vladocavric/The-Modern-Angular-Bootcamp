// @ts-ignore
import faker from 'faker'
export class Item {
    location: {
        lat: number
        lng: number
    }

    constructor(){
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}

import {User} from "./User";
import {CustomMap} from "./CustomMap";
import {Company} from "./Company";

const mapEl = document.getElementById('map')
const user = new User()
const company = new Company()

const map = new CustomMap(mapEl)
map.addMarker(user)
map.addMarker(company)

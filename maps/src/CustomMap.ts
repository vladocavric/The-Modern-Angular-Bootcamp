export interface Mappable {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(element: Element) {
        this.googleMap = new google.maps.Map<Element>(element, {
            zoom: 1.5,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(item: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: item.location.lat,
                lng: item.location.lng
            },
        })
        const infoWindow = new google.maps.InfoWindow({
            content: item.markerContent()
        })
        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker)
        })
    }
}

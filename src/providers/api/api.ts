import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
    lat: any;
    lon: any;
    globalPos: any;

    constructor(public http: Http, public geolocation: Geolocation) { }

    getBeers() {
        // this.geolocation.getCurrentPosition().then((res) => {
        //     this.lat = res.coords.latitude;
        //     this.lon = res.coords.longitude;
        //     console.log(this.lat + " " + this.lon);
        // }, (err) => {
        //     return this.http.get('https://lcboapi.com/stores?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL&lat=43.65838&lon=-79.44335&product_id=460881').map(res => res.json());
        // });
        return this.http.get('https://lcboapi.com/stores?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL&lat=43.65838&lon=-79.44335&product_id=460881').map(res => res.json());
    }

    getOV() {
        return this.http.get('https://lcboapi.com/products/460881?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL').map(res => res.json());
    }
}

webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvStoreDetailsPageModule", function() { return OvStoreDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ov_store_details__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OvStoreDetailsPageModule = (function () {
    function OvStoreDetailsPageModule() {
    }
    return OvStoreDetailsPageModule;
}());
OvStoreDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ov_store_details__["a" /* OvStoreDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ov_store_details__["a" /* OvStoreDetailsPage */]),
        ],
    })
], OvStoreDetailsPageModule);

//# sourceMappingURL=ov-store-details.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OvStoreDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OvStoreDetailsPage = (function () {
    function OvStoreDetailsPage(navCtrl, navParams, googleMaps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.beer = this.navParams.get("beer");
    }
    OvStoreDetailsPage.prototype.convertMetersToKM = function (beer) {
        return (beer / 1000).toFixed(2) + "KM";
    };
    OvStoreDetailsPage.prototype.formatStoreAddress = function (beer) {
        var addressOne = beer.address_line_1, addressTwo = beer.address_line_2;
        return (addressTwo == null ? addressOne : addressOne + ", " + addressTwo);
    };
    OvStoreDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OvStoreDetailsPage');
        this.loadMap();
    };
    OvStoreDetailsPage.prototype.loadMap = function () {
        var _this = this;
        this.mapElement = document.getElementById('map');
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create(this.mapElement, mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
            console.log('Map is ready!');
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                }
            }).then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                    alert('clicked');
                });
            });
        });
    };
    return OvStoreDetailsPage;
}());
OvStoreDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ov-store-details',template:/*ion-inline-start:"/Users/joshhanson/Documents/OVFinder/src/pages/ov-store-details/ov-store-details.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{ beer.name }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-content>\n            <div id="map"></div>\n            <ion-card-title>\n                {{ beer.name }}\n            </ion-card-title>\n            <p>\n                {{ formatStoreAddress(beer) }}\n            </p>\n            <p>\n                {{ beer.city }}\n            </p>\n            <p>\n                {{"Distance: " + convertMetersToKM(beer.distance_in_meters)}}\n            </p>\n\n            <p>\n                {{ beer.telephone }}\n            </p>\n            <p>\n                {{"Has bilingual services: " + beer.has_bilingual_services }}\n            </p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/joshhanson/Documents/OVFinder/src/pages/ov-store-details/ov-store-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], OvStoreDetailsPage);

//# sourceMappingURL=ov-store-details.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LatLng */
/* unused harmony export LatLngBounds */
/* unused harmony export VisibleRegion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoogleMapsEvent; });
/* unused harmony export GoogleMapsAnimation */
/* unused harmony export GoogleMapsMapTypeId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMaps; });
/* unused harmony export BaseClass */
/* unused harmony export BaseArrayClass */
/* unused harmony export Circle */
/* unused harmony export Environment */
/* unused harmony export Geocoder */
/* unused harmony export Encoding */
/* unused harmony export Spherical */
/* unused harmony export GoogleMap */
/* unused harmony export GroundOverlay */
/* unused harmony export HtmlInfoWindow */
/* unused harmony export Marker */
/* unused harmony export MarkerCluster */
/* unused harmony export Polygon */
/* unused harmony export Polyline */
/* unused harmony export TileOverlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @hidden
 */
var LatLng = (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());

/**
 * @hidden
 */
var LatLngBounds = (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    /**
     * Converts to string
     * @return {string}
     */
    LatLngBounds.prototype.toString = function () { return; };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    LatLngBounds.prototype.toUrlValue = function (precision) { return; };
    /**
     * Extends this bounds to contain the given point.
     * @param LatLng {ILatLng}
     */
    LatLngBounds.prototype.extend = function (LatLng) { };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    LatLngBounds.prototype.contains = function (LatLng) { return; };
    /**
     * Computes the center of this LatLngBounds
     * @return {LatLng}
     */
    LatLngBounds.prototype.getCenter = function () { return; };
    return LatLngBounds;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], LatLngBounds.prototype, "northeast", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], LatLngBounds.prototype, "southwest", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", String)
], LatLngBounds.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toString", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toUrlValue", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LatLngBounds.prototype, "extend", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], LatLngBounds.prototype, "contains", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLng)
], LatLngBounds.prototype, "getCenter", null);
/**
 * @hidden
 */
var VisibleRegion = (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    /**
     * Converts to string
     * @return {string}
     */
    VisibleRegion.prototype.toString = function () { return; };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    VisibleRegion.prototype.toUrlValue = function (precision) { return; };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    VisibleRegion.prototype.contains = function (LatLng) { return; };
    return VisibleRegion;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], VisibleRegion.prototype, "northeast", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], VisibleRegion.prototype, "southwest", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], VisibleRegion.prototype, "farLeft", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], VisibleRegion.prototype, "farRight", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], VisibleRegion.prototype, "nearLeft", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", Object)
], VisibleRegion.prototype, "nearRight", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
    __metadata("design:type", String)
], VisibleRegion.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], VisibleRegion.prototype, "toString", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], VisibleRegion.prototype, "toUrlValue", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], VisibleRegion.prototype, "contains", null);
/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_LOADED: 'map_loaded',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    CLUSTER_CLICK: 'cluster_click',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_ROADMAP',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
/**
 * @name Google Maps
 * @description
 * This plugin uses the native Google Maps SDK
 * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapOptions,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 * import { Component } from "@angular/core/";
 *
 * @Component({
 *   selector: 'page-home',
 *   templateUrl: 'home.html'
 * })
 * export class HomePage {
 *   map: GoogleMap;
 *   mapElement: HTMLElement;
 *   constructor(private googleMaps: GoogleMaps) { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
 *     this.mapElement = document.getElementById('map');
 *
 *     let mapOptions: GoogleMapOptions = {
 *       camera: {
 *         target: {
 *           lat: 43.0741904,
 *           lng: -89.3809802
 *         },
 *         zoom: 18,
 *         tilt: 30
 *       }
 *     };
 *
 *     this.map = this.googleMaps.create(this.mapElement, mapOptions);
 *
 *     // Wait the MAP_READY before using any methods.
 *     this.map.one(GoogleMapsEvent.MAP_READY)
 *       .then(() => {
 *         console.log('Map is ready!');
 *
 *         // Now you can use all methods safely.
 *         this.map.addMarker({
 *             title: 'Ionic',
 *             icon: 'blue',
 *             animation: 'DROP',
 *             position: {
 *               lat: 43.0741904,
 *               lng: -89.3809802
 *             }
 *           })
 *           .then(marker => {
 *             marker.on(GoogleMapsEvent.MARKER_CLICK)
 *               .subscribe(() => {
 *                 alert('clicked');
 *               });
 *           });
 *
 *       });
 *   }
 * }
 *
 * ```
 * @classes
 * GoogleMap
 * Circle
 * Encoding
 * Environment
 * Geocoder
 * GroundOverlay
 * HtmlInfoWindow
 * Geocoder
 * LatLng
 * LatLngBounds
 * Marker
 * MarkerCluster
 * Polygon
 * Polyline
 * Spherical
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MarkerClusterIcon
 * MarkerClusterOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * VisibleRegion
 */
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {any} Options
     * @return {GoogleMap}
     */
    GoogleMaps.prototype.create = function (element, options) {
        var googleMap = new GoogleMap(element, options);
        googleMap.set('_overlays', new BaseArrayClass());
        return googleMap;
    };
    return GoogleMaps;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));
GoogleMaps.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
GoogleMaps.ctorParameters = function () { return []; };
GoogleMaps = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps',
        plugin: 'cordova-plugin-googlemaps',
        repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
        install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
        installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
        platforms: ['Android', 'iOS']
    })
], GoogleMaps);

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
var BaseClass = (function () {
    function BaseClass() {
    }
    /**
     * Adds an event listener.
     *
     * @return {Observable<any>}
     */
    BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay_1 = _this.get(args[args.length - 1].getId());
                        if (!overlay_1) {
                            var markerJS_1 = args[args.length - 1];
                            var markerCluster = _this;
                            overlay_1 = new Marker(markerCluster.getMap(), markerJS_1);
                            _this.get('_overlays').push(markerJS_1.getId());
                            _this.set(markerJS_1.getId(), overlay_1);
                            markerJS_1.one(markerJS_1.getId() + '_remove', function () {
                                var idx = _this.get('_overlays').indexOf(overlay_1);
                                _this.get('_overlays').removeAt(idx);
                                _this.set(markerJS_1.getId(), undefined);
                            });
                        }
                        args[args.length - 1] = overlay_1;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get(args[args.length - 1].getId());
                    }
                }
                observer.next(args);
            });
        });
    };
    /**
     * Adds an event listener that works once.
     *
     * @return {Promise<any>}
     */
    BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay_2 = _this.get(args[args.length - 1].getId());
                        if (!overlay_2) {
                            var markerJS_2 = args[args.length - 1];
                            var markerCluster = _this;
                            overlay_2 = new Marker(markerCluster.getMap(), markerJS_2);
                            _this.get('_overlays').push(markerJS_2.getId());
                            _this.set(markerJS_2.getId(), overlay_2);
                            markerJS_2.one(markerJS_2.getId() + '_remove', function () {
                                var idx = _this.get('_overlays').indexOf(overlay_2);
                                _this.get('_overlays').removeAt(idx);
                                _this.set(markerJS_2.getId(), undefined);
                            });
                        }
                        args[args.length - 1] = overlay_2;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get(args[args.length - 1].getId());
                    }
                }
                resolve(args);
            });
        });
    };
    /**
     * Gets a value
     * @param key
     */
    BaseClass.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    BaseClass.prototype.set = function (key, value, noNotify) { };
    /**
     * Bind a key to another object
     * @param key {string}
     * @param target {any}
     * @param targetKey? {string}
     * @param noNotify? {boolean}
     */
    BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) { };
    /**
     * Listen to a map event.
     *
     * @return {Observable<any>}
     */
    BaseClass.prototype.on = function (eventName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay_3 = _this.get(args[args.length - 1].getId());
                        if (!overlay_3) {
                            var markerJS_3 = args[args.length - 1];
                            var markerCluster = _this;
                            overlay_3 = new Marker(markerCluster.getMap(), markerJS_3);
                            _this.get('_overlays').push(markerJS_3.getId());
                            _this.set(markerJS_3.getId(), overlay_3);
                            markerJS_3.one(markerJS_3.getId() + '_remove', function () {
                                var idx = _this.get('_overlays').indexOf(overlay_3);
                                _this.get('_overlays').removeAt(idx);
                                _this.set(markerJS_3.getId(), undefined);
                            });
                        }
                        args[args.length - 1] = overlay_3;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get(args[args.length - 1].getId());
                    }
                }
                observer.next(args);
            });
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @return {Promise<any>}
     */
    BaseClass.prototype.one = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay_4 = _this.get(args[args.length - 1].getId());
                        if (!overlay_4) {
                            var markerJS_4 = args[args.length - 1];
                            var markerCluster = _this;
                            overlay_4 = new Marker(markerCluster.getMap(), markerJS_4);
                            _this.get('_overlays').push(markerJS_4.getId());
                            _this.set(markerJS_4.getId(), overlay_4);
                            markerJS_4.one(markerJS_4.getId() + '_remove', function () {
                                var idx = _this.get('_overlays').indexOf(overlay_4);
                                _this.get('_overlays').removeAt(idx);
                                _this.set(markerJS_4.getId(), undefined);
                            });
                        }
                        args[args.length - 1] = overlay_4;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get(args[args.length - 1].getId());
                    }
                }
                resolve(args);
            });
        });
    };
    /**
     * Clears all stored values
     */
    BaseClass.prototype.empty = function () { };
    /**
     * Dispatch event.
     */
    BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
    };
    /**
     * Executes off() and empty()
     */
    BaseClass.prototype.destroy = function () {
        var map = this._objectInstance.getMap();
        if (map) {
            map.get('_overlays').set(this._objectInstance.getId(), undefined);
        }
        this._objectInstance.remove();
    };
    return BaseClass;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ observable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], BaseClass.prototype, "addEventListener", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseClass.prototype, "addListenerOnce", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BaseClass.prototype, "get", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Boolean]),
    __metadata("design:returntype", void 0)
], BaseClass.prototype, "set", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String, Boolean]),
    __metadata("design:returntype", void 0)
], BaseClass.prototype, "bindTo", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ observable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], BaseClass.prototype, "on", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseClass.prototype, "one", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseClass.prototype, "empty", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BaseClass.prototype, "trigger", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseClass.prototype, "destroy", null);
BaseClass = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        plugin: 'cordova-plugin-googlemaps',
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.BaseClass',
        repo: ''
    })
], BaseClass);

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
var BaseArrayClass = (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = _super.call(this) || this;
        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
            _this._objectInstance = initialData;
        }
        else {
            _this._objectInstance = new (GoogleMaps.getPlugin().BaseArrayClass)(initialData);
        }
        return _this;
    }
    /**
     * Removes all elements from the array.
     * @param noNotify? {boolean} Set true to prevent remove_at events.
     */
    BaseArrayClass.prototype.empty = function (noNotify) { };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @param callback? {Function}
     */
    BaseArrayClass.prototype.forEach = function (fn, callback) { };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Array<Object>} returns a new array with the results
     */
    BaseArrayClass.prototype.map = function (fn, callback) { return; };
    /**
     * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Array<Object>} returns a new array with the results
     */
    BaseArrayClass.prototype.filter = function (fn, callback) { return; };
    /**
     * Returns a reference to the underlying Array.
     * @return {Array<Object>}
     */
    BaseArrayClass.prototype.getArray = function () { return; };
    /**
     * Returns the element at the specified index.
     * @param index {number}
     * @return {Object}
     */
    BaseArrayClass.prototype.getAt = function (index) { };
    /**
     * Returns the number of the elements.
     * @return {number}
     */
    BaseArrayClass.prototype.getLength = function () { return; };
    /**
     * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @param element {Object}
     * @return {number}
     */
    BaseArrayClass.prototype.indexOf = function (element) { return; };
    /**
     * The reverse() method reverses an array in place.
     */
    BaseArrayClass.prototype.reverse = function () { };
    /**
     * The sort() method sorts the elements of an array in place and returns the array.
     */
    BaseArrayClass.prototype.sort = function () { };
    /**
     * Inserts an element at the specified index.
     * @param index {number}
     * @param element {Object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     * @return {Object}
     */
    BaseArrayClass.prototype.insertAt = function (index, element, noNotify) { };
    /**
     * Removes the last element of the array and returns that element.
     * @param noNotify? {boolean} Set true to prevent remove_at events.
     * @return {Object}
     */
    BaseArrayClass.prototype.pop = function (noNotify) { return; };
    /**
     * Adds one element to the end of the array and returns the new length of the array.
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    BaseArrayClass.prototype.push = function (element, noNotify) { };
    /**
     * Removes an element from the specified index.
     * @param index {number}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    BaseArrayClass.prototype.removeAt = function (index, noNotify) { };
    /**
     * Sets an element at the specified index.
     * @param index {number}
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent set_at events.
     */
    BaseArrayClass.prototype.setAt = function (index, element, noNotify) { };
    return BaseArrayClass;
}(BaseClass));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "empty", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "forEach", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Array)
], BaseArrayClass.prototype, "map", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Array)
], BaseArrayClass.prototype, "filter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BaseArrayClass.prototype, "getArray", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], BaseArrayClass.prototype, "getAt", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], BaseArrayClass.prototype, "getLength", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], BaseArrayClass.prototype, "indexOf", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "reverse", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "sort", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Boolean]),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "insertAt", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Object)
], BaseArrayClass.prototype, "pop", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "push", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "removeAt", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Boolean]),
    __metadata("design:returntype", void 0)
], BaseArrayClass.prototype, "setAt", null);
BaseArrayClass = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        plugin: 'cordova-plugin-googlemaps',
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.BaseArrayClass',
        repo: ''
    }),
    __metadata("design:paramtypes", [Object])
], BaseArrayClass);

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Circle.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Circle.prototype.getMap = function () { return this._map; };
    /**
     * Change the center position.
     * @param latLng {ILatLng}
     */
    Circle.prototype.setCenter = function (latLng) { };
    /**
     * Return the current center position
     * @return {ILatLng}
     */
    Circle.prototype.getCenter = function () { return; };
    /**
     * Return the current circle radius.
     * @return {number}
     */
    Circle.prototype.getRadius = function () { return; };
    /**
     * Change the circle radius.
     * @param radius {number}
     */
    Circle.prototype.setRadius = function (radius) { };
    /**
     * Change the filling color (inner color).
     * @param color {string}
     */
    Circle.prototype.setFillColor = function (color) { };
    /**
     * Return the current circle filling color (inner color).
     * @return {string}
     */
    Circle.prototype.getFillColor = function () { return; };
    /**
     * Change the stroke width.
     * @param strokeWidth {number}
     */
    Circle.prototype.setStrokeWidth = function (strokeWidth) { };
    /**
     * Return the current circle stroke width (unit: pixel).
     * @return {number}
     */
    Circle.prototype.getStrokeWidth = function () { return; };
    /**
     * Change the stroke color (outter color).
     * @param strokeColor {string}
     */
    Circle.prototype.setStrokeColor = function (strokeColor) { };
    /**
     * Return the current circle stroke color (outer color).
     * @return {string}
     */
    Circle.prototype.getStrokeColor = function () { return; };
    /**
     * Change clickablity of the circle.
     * @param clickable {boolean}
     */
    Circle.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the circle is clickable.
     * @return {boolean}
     */
    Circle.prototype.getClickable = function () { return; };
    /**
     * Change the circle zIndex order.
     * @param zIndex {number}
     */
    Circle.prototype.setZIndex = function (zIndex) { };
    /**
     * Return the current circle zIndex.
     * @return {number}
     */
    Circle.prototype.getZIndex = function () { return; };
    /**
     * Remove the circle.
     */
    Circle.prototype.remove = function () { };
    /**
     * Return the latLngBounds (rectangle) that contains the circle.
     * @return {LatLngBounds}
     */
    Circle.prototype.getBounds = function () { return; };
    /**
     * Set circle visibility
     * @param visible {boolean}
     */
    Circle.prototype.setVisible = function (visible) { };
    /**
     * Returns a boolean that indicates whether the circle is visible
     * @return {boolean}
     */
    Circle.prototype.getVisible = function () { return; };
    return Circle;
}(BaseClass));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Circle.prototype, "getId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setCenter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Circle.prototype, "getCenter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getRadius", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setRadius", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setFillColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Circle.prototype, "getFillColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeWidth", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getStrokeWidth", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Circle.prototype, "getStrokeColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Circle.prototype, "getClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Circle.prototype, "remove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLngBounds)
], Circle.prototype, "getBounds", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Circle.prototype, "getVisible", null);
/**
 * @hidden
 */
var Environment = (function () {
    function Environment() {
    }
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    Environment.prototype.getLicenseInfo = function () {
        return new Promise(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    Environment.prototype.setBackgroundColor = function (color) {
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    return Environment;
}());
Environment = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        plugin: 'cordova-plugin-googlemaps',
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.environment',
        repo: ''
    })
], Environment);

/**
 * @hidden
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    Geocoder.prototype.geocode = function (request) {
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    return Geocoder;
}());
Geocoder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.Geocoder',
        plugin: 'cordova-plugin-googlemaps',
        repo: ''
    })
], Geocoder);

/**
 * @hidden
 */
var Encoding = (function () {
    function Encoding() {
    }
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    Encoding.prototype.decodePath = function (encoded, precision) { return; };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    Encoding.prototype.encodePath = function (path) { return; };
    return Encoding;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", LatLng)
], Encoding.prototype, "decodePath", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], Encoding.prototype, "encodePath", null);
Encoding = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.geometry.encoding',
        plugin: 'cordova-plugin-googlemaps',
        repo: ''
    })
], Encoding);

/**
 * @hidden
 */
var Spherical = (function () {
    function Spherical() {
    }
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    Spherical.prototype.computeDistanceBetween = function (from, to) {
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    Spherical.prototype.computeOffset = function (from, distance, heading) {
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    Spherical.prototype.computeLength = function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.prototype.computeArea = function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeArea(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.prototype.computeSignedArea = function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    Spherical.prototype.computeHeading = function (from, to) {
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    Spherical.prototype.interpolate = function (from, to, fraction) {
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    return Spherical;
}());
Spherical = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.geometry.spherical',
        plugin: 'cordova-plugin-googlemaps',
        repo: ''
    })
], Spherical);

/**
 * @hidden
 */
var GoogleMap = (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options) {
        var _this = _super.call(this) || this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["i" /* checkAvailability */])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            _this._objectInstance = GoogleMaps.getPlugin().Map.getMap(element, options);
        }
        return _this;
    }
    /**
     * Changes the map div
     * @param domNode
     */
    GoogleMap.prototype.setDiv = function (domNode) { };
    /**
     * Returns the map HTML element
     * @return {HTMLElement}
     */
    GoogleMap.prototype.getDiv = function () { return; };
    /**
     * Changes the map type id
     * @param mapTypeId {string}
     */
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { };
    /**
     * Moves the camera with animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.animateCamera = function (cameraPosition) { return; };
    /**
     * Zooming in the camera with animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.animateCameraZoomIn = function () { return; };
    /**
     * Zooming out the camera with animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.animateCameraZoomOut = function () { return; };
    /**
     * Moves the camera without animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return; };
    /**
     * Zooming in the camera without animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.moveCameraZoomIn = function () { return; };
    /**
     * Zooming out the camera without animation
     * @return {Promise<any>}
     */
    GoogleMap.prototype.moveCameraZoomOut = function () { return; };
    /**
     * Get the position of the camera.
     * @return {CameraPosition}
     */
    GoogleMap.prototype.getCameraPosition = function () { return; };
    /**
     * Get the current camera target position
     * @return {Promise<CameraPosition>}
     */
    GoogleMap.prototype.getCameraTarget = function () { return; };
    /**
     * Get the current camera zoom level
     * @return {number}
     */
    GoogleMap.prototype.getCameraZoom = function () { return; };
    /**
     * Get the current camera bearing
     * @return {number}
     */
    GoogleMap.prototype.getCameraBearing = function () { return; };
    /**
     * Get the current camera tilt (view angle)
     * @return {number}
     */
    GoogleMap.prototype.getCameraTilt = function () { return; };
    /**
     * Set the center position of the camera view
     * @param latLng {ILatLng | Array<ILatLng>}
     */
    GoogleMap.prototype.setCameraTarget = function (latLng) { };
    /**
     * Set zoom level of the camera
     * @param zoomLevel {number} Zoom level
     */
    GoogleMap.prototype.setCameraZoom = function (zoomLevel) { };
    /**
     * Set the camera view angle
     * @param tiltLevel {number} Tilt level
     */
    GoogleMap.prototype.setCameraTilt = function (tiltLevel) { };
    /**
     * Set camera bearing
     * @param bearing {any}
     */
    GoogleMap.prototype.setCameraBearing = function (bearing) { };
    /**
     * Change the center of the map by the given distance in pixels
     * @param x {any}
     * @param y {any}
     */
    GoogleMap.prototype.panBy = function (x, y) { };
    /**
     * Get the current visible region (southWest and northEast)
     * @return {VisibleRegion}
     */
    GoogleMap.prototype.getVisibleRegion = function () { return; };
    /**
     * Get the current device location
     * @return {Promise<MyLocation>}
     */
    GoogleMap.prototype.getMyLocation = function (options) { return; };
    /**
     * Set false to ignore all clicks on the map
     * @param isClickable {boolean}
     */
    GoogleMap.prototype.setClickable = function (isClickable) { };
    /**
     * Destroy a map completely
     * @return {Promise<any>}
     */
    GoogleMap.prototype.remove = function () {
        var _this = this;
        this.get('_overlays').forEach(function (overlayId) { return _this.set(overlayId, null); });
        this.get('_overlays').empty();
        this.set('_overlays', undefined);
        return new Promise(function (resolve) {
            _this._objectInstance.remove(function () { return resolve(); });
        });
    };
    /**
     * Remove all overlays, such as marker
     * @return {Promise<any>}
     */
    GoogleMap.prototype.clear = function () {
        var _this = this;
        this.get('_overlays').forEach(function (overlayId) { return _this.set(overlayId, null); });
        this.get('_overlays').empty();
        return new Promise(function (resolve) {
            _this._objectInstance.clear(function () { return resolve(); });
        });
    };
    /**
     * Convert the unit from LatLng to the pixels from the left/top of the map div
     * @return {Promise<any>}
     */
    GoogleMap.prototype.fromLatLngToPoint = function (latLng) { return; };
    /**
     * Convert the unit from the pixels from the left/top to the LatLng
     * @return {Promise<LatLng>}
     */
    GoogleMap.prototype.fromPointToLatLng = function (point) { return; };
    /**
     * Set true if you want to show the MyLocation button
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { };
    /**
     * Get the currently focused building
     * @return {Promise<any>}
     */
    GoogleMap.prototype.getFocusedBuilding = function () { return; };
    /**
     * Set true if you want to show the indoor map
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { };
    /**
     * Set true if you want to show the traffic layer
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { };
    /**
     * Set true if you want to show the compass button
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setCompassEnabled = function (enabled) { };
    /**
     * Sets the preference for whether all gestures should be enabled or disabled
     * @param enabled {boolean}
     */
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { };
    /**
     * Set visibility of the map
     * @param visible {boolean}
     */
    GoogleMap.prototype.setVisible = function (visible) { };
    /**
     * Adjust the map padding (same as CSS padding rule)
     * @param top {number}
     * @param right {number}
     * @param left {number}
     * @param bottom {number}
     */
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { };
    /**
     * Set options
     * @param options
     */
    GoogleMap.prototype.setOptions = function (options) { };
    /**
     * Adds a marker
     * @return {Promise<Marker | any>}
     */
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    var markerId_1 = marker.getId();
                    var overlay_5 = new Marker(_this, marker);
                    _this.get('_overlays').push(markerId_1);
                    _this.set(markerId_1, overlay_5);
                    marker.one(markerId_1 + '_remove', function () {
                        var idx = _this.get('_overlays').indexOf(overlay_5);
                        _this.get('_overlays').removeAt(idx);
                        _this.set(markerId_1, undefined);
                    });
                    resolve(overlay_5);
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                if (markerCluster) {
                    var overlay_6 = new MarkerCluster(_this, markerCluster);
                    _this.get('_overlays').push(markerCluster.getId());
                    _this.set(markerCluster.getId(), overlay_6);
                    markerCluster.one('remove', function () {
                        var idx = _this.get('_overlays').indexOf(overlay_6);
                        _this.get('_overlays').removeAt(idx);
                        _this.set(markerCluster.getId(), undefined);
                    });
                    markerCluster.set('_overlays', new BaseArrayClass());
                    resolve(overlay_6);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a circle
     * @return {Promise<Circle | any>}
     */
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    var circleId_1 = circle.getId();
                    var overlay_7 = new Circle(_this, circle);
                    _this.get('_overlays').push(circleId_1);
                    _this.set(circleId_1, overlay_7);
                    circle.one(circleId_1 + '_remove', function () {
                        var idx = _this.get('_overlays').indexOf(overlay_7);
                        _this.get('_overlays').removeAt(idx);
                        _this.set(circleId_1, undefined);
                    });
                    resolve(overlay_7);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a polygon
     * @return {Promise<Polygon | any>}
     */
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    var polygonId_1 = polygon.getId();
                    var overlay_8 = new Polygon(_this, polygon);
                    _this.get('_overlays').push(polygonId_1);
                    _this.set(polygonId_1, overlay_8);
                    polygon.one(polygonId_1 + '_remove', function () {
                        var idx = _this.get('_overlays').indexOf(overlay_8);
                        _this.get('_overlays').removeAt(idx);
                        _this.set(polygonId_1, undefined);
                    });
                    resolve(overlay_8);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     *
     * @return {Promise<Polyline | any>}
     */
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    var polylineId_1 = polyline.getId();
                    var overlay_9 = new Polyline(_this, polyline);
                    _this.get('_overlays').push(polylineId_1);
                    _this.set(polylineId_1, overlay_9);
                    polyline.one(polylineId_1 + '_remove', function () {
                        var idx = _this.get('_overlays').indexOf(overlay_9);
                        _this.get('_overlays').removeAt(idx);
                        _this.set(polylineId_1, undefined);
                    });
                    resolve(overlay_9);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @return {Promise<TileOverlay | any>}
     */
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    var tileOverlayId_1 = tileOverlay.getId();
                    var overlay_10 = new TileOverlay(_this, tileOverlay);
                    _this.get('_overlays').push(tileOverlayId_1);
                    _this.set(tileOverlayId_1, overlay_10);
                    tileOverlay.one(tileOverlayId_1 + '_remove', function () {
                        var idx = _this.get('_overlays').indexOf(overlay_10);
                        _this.get('_overlays').removeAt(idx);
                        _this.set(tileOverlayId_1, undefined);
                    });
                    resolve(overlay_10);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @return {Promise<GroundOverlay | any>}
     */
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    var groundOverlayId_1 = groundOverlay.getId();
                    var overlay_11 = new GroundOverlay(_this, groundOverlay);
                    _this.get('_overlays').push(groundOverlayId_1);
                    _this.set(groundOverlayId_1, overlay_11);
                    groundOverlay.one(groundOverlayId_1 + '_remove', function () {
                        var idx = _this.get('_overlays').indexOf(overlay_11);
                        _this.get('_overlays').removeAt(idx);
                        _this.set(groundOverlayId_1, undefined);
                    });
                    resolve(overlay_11);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Refreshes layout.
     * You can execute it, but you don't need to do that. The plugin does this automatically.
     */
    GoogleMap.prototype.refreshLayout = function () { };
    /**
     * @return {Promise<any>}
     */
    GoogleMap.prototype.toDataURL = function () { return; };
    return GoogleMap;
}(BaseClass));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setDiv", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", HTMLElement)
], GoogleMap.prototype, "getDiv", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMapTypeId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "animateCamera", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "animateCameraZoomIn", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "animateCameraZoomOut", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "moveCamera", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "moveCameraZoomIn", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "moveCameraZoomOut", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], GoogleMap.prototype, "getCameraPosition", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], GoogleMap.prototype, "getCameraTarget", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GoogleMap.prototype, "getCameraZoom", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GoogleMap.prototype, "getCameraBearing", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GoogleMap.prototype, "getCameraTilt", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCameraTarget", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCameraZoom", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCameraTilt", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCameraBearing", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "panBy", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", VisibleRegion)
], GoogleMap.prototype, "getVisibleRegion", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getMyLocation", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "remove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "clear", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromLatLngToPoint", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromPointToLatLng", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMyLocationEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getFocusedBuilding", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setIndoorEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setTrafficEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCompassEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setAllGesturesEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setPadding", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setOptions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addMarker", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addMarkerCluster", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addCircle", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolygon", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolyline", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addTileOverlay", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addGroundOverlay", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "refreshLayout", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "toDataURL", null);
GoogleMap = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        pluginName: 'GoogleMaps',
        plugin: 'cordova-plugin-googlemaps'
    }),
    __metadata("design:paramtypes", [Object, Object])
], GoogleMap);

/**
 * @hidden
 */
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    GroundOverlay.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    GroundOverlay.prototype.getMap = function () { return this._map; };
    /**
     * Change the bounds of the GroundOverlay
     * @param bounds { ILatLng[]}
     */
    GroundOverlay.prototype.setBounds = function (bounds) { };
    /**
     * Change the bearing of the ground overlay
     * @param bearing {number}
     */
    GroundOverlay.prototype.setBearing = function (bearing) { };
    /**
     * Return the current bearing value
     */
    GroundOverlay.prototype.getBearing = function () { return; };
    /**
     * Change the image of the ground overlay
     * @param image {string} URL of image
     */
    GroundOverlay.prototype.setImage = function (image) { };
    ;
    /**
     * Change the opacity of the ground overlay from 0.0 to 1.0
     * @param opacity {number}
     */
    GroundOverlay.prototype.setOpacity = function (opacity) { };
    /**
     * Return the current opacity
     * @return {number}
     */
    GroundOverlay.prototype.getOpacity = function () { return; };
    /**
     * Change clickablity of the ground overlay
     * @param clickable {boolean}
     */
    GroundOverlay.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the ground overlay is clickable
     * @return {boolean}
     */
    GroundOverlay.prototype.getClickable = function () { return; };
    /**
     * Change visibility of the ground overlay
     * @param visible {boolean}
     */
    GroundOverlay.prototype.setVisible = function (visible) { };
    /**
     * Return true if the ground overlay is visible
     * @return {boolean}
     */
    GroundOverlay.prototype.getVisible = function () { return; };
    /**
     * Change the ground overlay zIndex order
     * @param index {number}
     */
    GroundOverlay.prototype.setZIndex = function (index) { };
    /**
     * Return the current ground overlay zIndex
     * @return {number}
     */
    GroundOverlay.prototype.getZIndex = function () { return; };
    /**
     * Remove the ground overlay
     */
    GroundOverlay.prototype.remove = function () {
        this._objectInstance.getMap().get('_overlays').set(this.getId(), undefined);
        this._objectInstance.remove();
        this.destroy();
    };
    return GroundOverlay;
}(BaseClass));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GroundOverlay.prototype, "getId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setBounds", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setBearing", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getBearing", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setImage", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setOpacity", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getOpacity", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], GroundOverlay.prototype, "getClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], GroundOverlay.prototype, "getVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "remove", null);
/**
 * @hidden
 */
var HtmlInfoWindow = HtmlInfoWindow_1 = (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow(initialData) {
        var _this = _super.call(this) || this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["i" /* checkAvailability */])(HtmlInfoWindow_1.getPluginRef(), null, HtmlInfoWindow_1.getPluginName()) === true) {
            if (initialData instanceof GoogleMaps.getPlugin().HtmlInfoWindow) {
                _this._objectInstance = initialData;
            }
            else {
                _this._objectInstance = new (HtmlInfoWindow_1.getPlugin())();
            }
        }
        return _this;
    }
    /**
     * Change the backgroundColor
     * @param color {string}
     */
    HtmlInfoWindow.prototype.setBackgroundColor = function (color) { };
    /**
     * Set your HTML contents.
     * @param content {any} String containing text or HTML element
     */
    HtmlInfoWindow.prototype.setContent = function (content) { };
    /**
     * Open the htmlInfoWindow
     * @param marker {Marker}
     */
    HtmlInfoWindow.prototype.open = function (marker) { };
    /**
     * Close the htmlInfoWindow
     */
    HtmlInfoWindow.prototype.close = function () { };
    return HtmlInfoWindow;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HtmlInfoWindow.prototype, "setBackgroundColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HtmlInfoWindow.prototype, "setContent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], HtmlInfoWindow.prototype, "open", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HtmlInfoWindow.prototype, "close", null);
HtmlInfoWindow = HtmlInfoWindow_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        plugin: 'cordova-plugin-googlemaps',
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.HtmlInfoWindow',
        repo: ''
    }),
    __metadata("design:paramtypes", [Object])
], HtmlInfoWindow);

/**
 * @hidden
 */
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Marker.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () { return this._map; };
    /**
     * Set the marker position.
     * @param latLng {ILatLng}
     */
    Marker.prototype.setPosition = function (latLng) { return; };
    /**
     * Return the marker position.
     * @return {ILatLng}
     */
    Marker.prototype.getPosition = function () { return; };
    /**
     * Show the normal infoWindow of the marker.
     */
    Marker.prototype.showInfoWindow = function () { };
    /**
     * Hide the normal infoWindow of the marker.
     */
    Marker.prototype.hideInfoWindow = function () { };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    Marker.prototype.setAnimation = function (animation) { };
    /**
     * Set true if you **do not want** to move the map when you click on the marker.
     * @param disableAutoPan {boolean}
     */
    Marker.prototype.setDisableAutoPan = function (disableAutoPan) { };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    Marker.prototype.setVisible = function (visible) { };
    /**
     * Return true if the marker is visible
     */
    Marker.prototype.isVisible = function () { return; };
    /**
     * Change title of the normal infoWindow.
     * @param title {string}
     */
    Marker.prototype.setTitle = function (title) { };
    /**
     * Return the title strings.
     * @return {string}
     */
    Marker.prototype.getTitle = function () { return; };
    /**
     * Change snippet of the normal infoWindow.
     * @param snippet {string}
     */
    Marker.prototype.setSnippet = function (snippet) { };
    /**
     * Return the snippet strings.
     * @return {string}
     */
    Marker.prototype.getSnippet = function () { return; };
    /**
     * Change the marker opacity from 0.0 to 1.0.
     * @param alpha {number} Opacity
     */
    Marker.prototype.setOpacity = function (alpha) { };
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    Marker.prototype.getOpacity = function () { return; };
    /**
     * Remove the marker.
     */
    Marker.prototype.remove = function () {
        this._objectInstance.getMap().get('_overlays').set(this.getId(), undefined);
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    Marker.prototype.setIconAnchor = function (x, y) { };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    Marker.prototype.setInfoWindowAnchor = function (x, y) { };
    /**
     * Return true if the infoWindow is shown on the marker
     * @return {boolean}
     */
    Marker.prototype.isInfoWindowShown = function () { return; };
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    Marker.prototype.getHashCode = function () { return; };
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     * @param y {number} z-index
     */
    Marker.prototype.setZIndex = function (zIndex) { };
    /**
     * Get z-index
     * @return {number}
     */
    Marker.prototype.getZIndex = function () { return; };
    /**
     * Set true if you allow all users to drag the marker.
     * @param draggable {boolean}
     */
    Marker.prototype.setDraggable = function (draggable) { };
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    Marker.prototype.isDraggable = function () { return; };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    Marker.prototype.setFlat = function (flat) { return; };
    /**
     * Change icon url and/or size
     * @param icon
     */
    Marker.prototype.setIcon = function (icon) { return; };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    Marker.prototype.setRotation = function (rotation) { };
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    Marker.prototype.getRotation = function () { return; };
    return Marker;
}(BaseClass));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setPosition", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Marker.prototype, "getPosition", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "showInfoWindow", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "hideInfoWindow", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setAnimation", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setDisableAutoPan", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setTitle", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getTitle", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setSnippet", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getSnippet", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setOpacity", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getOpacity", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "remove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIconAnchor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setInfoWindowAnchor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isInfoWindowShown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getHashCode", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setDraggable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isDraggable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setFlat", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIcon", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setRotation", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getRotation", null);
/**
 * @hidden
 */
var MarkerCluster = (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    MarkerCluster.prototype.getId = function () { return; };
    MarkerCluster.prototype.addMarker = function (marker) { };
    MarkerCluster.prototype.addMarkers = function (markers) { };
    MarkerCluster.prototype.remove = function () {
        this._objectInstance.set('_overlays', undefined);
        this._objectInstance.getMap().get('_overlays').set(this.getId(), undefined);
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    MarkerCluster.prototype.getMap = function () { return this._map; };
    return MarkerCluster;
}(BaseClass));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MarkerCluster.prototype, "getId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MarkerCluster.prototype, "addMarker", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], MarkerCluster.prototype, "addMarkers", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarkerCluster.prototype, "remove", null);
/**
 * @hidden
 */
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Polygon.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Polygon.prototype.getMap = function () { return this._map; };
    /**
     * Change the polygon points.
     * @param points {ILatLng[]}
     */
    Polygon.prototype.setPoints = function (points) { };
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polygon.prototype.getPoints = function () { return; };
    /**
     * Change the polygon holes.
     * @param holes {ILatLng[][]}
     */
    Polygon.prototype.setHoles = function (holes) { };
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    Polygon.prototype.getHoles = function () { return; };
    /**
     * Change the filling color (inner color)
     * @param fillColor {string}
     */
    Polygon.prototype.setFillColor = function (fillColor) { };
    /**
     * Return the current polygon filling color (inner color).
     * @return {string}
     */
    Polygon.prototype.getFillColor = function () { return; };
    /**
     * Change the stroke color (outer color)
     * @param strokeColor {string}
     */
    Polygon.prototype.setStrokeColor = function (strokeColor) { };
    /**
     * Return the current polygon stroke color (outer color)
     * @return {string}
     */
    Polygon.prototype.getStrokeColor = function () { return; };
    /**
     * Change clickablity of the polygon
     * @param clickable {boolean}
     */
    Polygon.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the polygon is clickable
     */
    Polygon.prototype.getClickable = function () { return; };
    /**
     * Change visibility of the polygon
     * @param visible {boolean}
     */
    Polygon.prototype.setVisible = function (visible) { };
    /**
     * Return true if the polygon is visible
     * @return {boolean}
     */
    Polygon.prototype.getVisible = function () { return; };
    /**
     * Change the polygon zIndex order.
     * @param zIndex {number}
     */
    Polygon.prototype.setZIndex = function (zIndex) { };
    /**
     * Return the current polygon zIndex
     * @return {number}
     */
    Polygon.prototype.getZIndex = function () { return; };
    /**
     * Remove the polygon.
     */
    Polygon.prototype.remove = function () {
        this._objectInstance.getMap().get('_overlays').set(this.getId(), undefined);
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Change the polygon stroke width
     */
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { };
    /**
     * Return the polygon stroke width
     */
    Polygon.prototype.getStrokeWidth = function () { return; };
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geodesic {boolean}
     */
    Polygon.prototype.setGeodesic = function (geodesic) { };
    /**
     * Return true if the polygon is geodesic.
     * @return {boolean}
     */
    Polygon.prototype.getGeodesic = function () { return; };
    return Polygon;
}(BaseClass));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setPoints", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", BaseArrayClass)
], Polygon.prototype, "getPoints", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setHoles", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", BaseArrayClass)
], Polygon.prototype, "getHoles", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setFillColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getFillColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getStrokeColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polygon.prototype, "getZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "remove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeWidth", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polygon.prototype, "getStrokeWidth", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setGeodesic", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getGeodesic", null);
/**
 * @hidden
 */
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    Polyline.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Polyline.prototype.getMap = function () { return this._map; };
    /**
     * Change the polyline points.
     * @param points {ILatLng[]}
     */
    Polyline.prototype.setPoints = function (points) { };
    /**
     * Return an instance of the BaseArrayClass
     * You can modify the points.
     */
    Polyline.prototype.getPoints = function () { return; };
    /**
     * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geoDesic {boolean}
     */
    Polyline.prototype.setGeoDesic = function (geoDesic) { };
    /**
     * Return true if the polyline is geodesic
     */
    Polyline.prototype.getGeodesic = function () { return; };
    /**
     * Change visibility of the polyline
     * @param visible {boolean}
     */
    Polyline.prototype.setVisible = function (visible) { };
    /**
     * Return true if the polyline is visible
     * @return {boolean}
     */
    Polyline.prototype.getVisible = function () { return; };
    /**
     * Change clickablity of the polyline
     * @param clickable {boolean}
     */
    Polyline.prototype.setClickable = function (clickable) { };
    /**
     * Return true if the polyline is clickable
     * @return {boolean}
     */
    Polyline.prototype.getClickable = function () { return; };
    /**
     * Change the polyline color
     * @param strokeColor {string}
     */
    Polyline.prototype.setStrokeColor = function (strokeColor) { };
    /**
     * Return the current polyline color
     * @return {string}
     */
    Polyline.prototype.getStrokeColor = function () { return; };
    /**
     * Change the polyline stroke width
     * @param strokeWidth {number}
     */
    Polyline.prototype.setStrokeWidth = function (strokeWidth) { };
    /**
     * Return the current stroke width (unit: pixel).
     * @return {number}
     */
    Polyline.prototype.getStrokeWidth = function () { return; };
    /**
     * Change the polyline zIndex order.
     * @param index {number}
     */
    Polyline.prototype.setZIndex = function (index) { };
    /**
     * Return the current polyline zIndex
     * @return {number}
     */
    Polyline.prototype.getZIndex = function () { return; };
    /**
     * Remove the polyline
     */
    Polyline.prototype.remove = function () {
        this._objectInstance.getMap().get('_overlays').set(this.getId(), undefined);
        this._objectInstance.remove();
        this.destroy();
    };
    return Polyline;
}(BaseClass));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polyline.prototype, "getId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setPoints", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", BaseArrayClass)
], Polyline.prototype, "getPoints", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setGeoDesic", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polyline.prototype, "getGeodesic", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polyline.prototype, "getVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polyline.prototype, "getClickable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setStrokeColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polyline.prototype, "getStrokeColor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setStrokeWidth", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getStrokeWidth", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "remove", null);
/**
 * @hidden
 */
var TileOverlay = (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Return the ID of instance.
     * @return {string}
     */
    TileOverlay.prototype.getId = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    TileOverlay.prototype.getMap = function () { return this._map; };
    /**
     * Set whether the tiles should fade in.
     * @param fadeIn {boolean}
     */
    TileOverlay.prototype.setFadeIn = function (fadeIn) { };
    /**
     * Get whether the tiles should fade in
     * @return {boolean}
     */
    TileOverlay.prototype.getFadeIn = function () { return; };
    /**
     * Set the zIndex of the tile overlay
     * @param zIndex {number}
     */
    TileOverlay.prototype.setZIndex = function (zIndex) { };
    /**
     * Return the zIndex of the tile overlay
     * @return {number}
     */
    TileOverlay.prototype.getZIndex = function () { return; };
    /**
     * Set the opacity of the tile overlay
     * @param opacity {number}
     */
    TileOverlay.prototype.setOpacity = function (opacity) { };
    /**
     * Return the opacity of the tile overlay
     * @return {number}
     */
    TileOverlay.prototype.getOpacity = function () { return; };
    /**
     * Set false if you want to hide
     * @param visible {boolean}
     */
    TileOverlay.prototype.setVisible = function (visible) { };
    /**
     * Return true if the tile overlay is visible
     * @return {boolean}
     */
    TileOverlay.prototype.getVisible = function () { return; };
    /**
     * Get tile size
     */
    TileOverlay.prototype.getTileSize = function () { return; };
    /**
     * Remove the tile overlay
     */
    TileOverlay.prototype.remove = function () {
        this._objectInstance.getMap().get('_overlays').set(this.getId(), undefined);
        this._objectInstance.remove();
        this.destroy();
    };
    return TileOverlay;
}(BaseClass));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TileOverlay.prototype, "getId", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setFadeIn", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getFadeIn", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getZIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setOpacity", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getOpacity", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getVisible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TileOverlay.prototype, "getTileSize", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "remove", null);
var HtmlInfoWindow_1;
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
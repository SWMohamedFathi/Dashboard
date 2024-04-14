import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //   this.map = L.map('map', { scrollWheelZoom: false }).setView([this.position.lat,this.position.lng], 12);
    //   const marker = L.marker([this.position.lat,this.position.lng]).addTo(this.map);
    //   const circle = L.circle([this.position.lat,this.position.lng],{color:"blue",fillColor:"black",fillOpacity:0.5,radius:700}).addTo(this.map);

    //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(this.map);

    const map = L.map('map').setView(
      [24.45673403236562, 54.31255682883561],
      25
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      map
    );

    var myIcon = L.icon({
      iconUrl: '../assets/Images/car.png',
      iconSize: [50, 75],
    });

    // L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

  


    map.on('click', function (e) {
      new L.Marker([e.latlng.lat, e.latlng.lng], { icon: myIcon }).addTo(map);
    });


    type LatLngExpression = [number, number];

    // Define an array of LatLngExpression
    var latlngs: LatLngExpression[] = [
      [24.45673403236562, 54.31255682883561],

    ];
    
  
  var polyline = L.polyline(latlngs, {color: 'yellow'}).addTo(map);
}}

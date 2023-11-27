import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('map')
  mapContainer!: ElementRef;
  map: any;

  ngAfterViewInit() {
    this.map = L.map(this.mapContainer.nativeElement).setView([-16.5066809,-68.1235177], 13); // coordenadas de ejemplo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    L.marker([-16.52627107610509, -68.10398893260385]).addTo(this.map)
    .bindPopup('SOS Peludos Clinica Veterinaria')
    .openPopup();

  }
}

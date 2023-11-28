import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import { MapaService } from '../../services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  private capasVeterinarias: L.LayerGroup<any> = L.layerGroup();
  private capasRefugios: L.LayerGroup<any> = L.layerGroup();
  private capasAreas: L.LayerGroup<any> = L.layerGroup();
  constructor(private mapaService: MapaService) {}

  ngOnInit() {
    // Inicializar el mapa...
  }

  ngAfterViewInit() {
    this.inicializarMapa();
    this.cargarVeterinarias();
    this.cargarRefugios();
    this.cargarAreas();
  }

  private inicializarMapa(): void {
    this.map = L.map('map').setView([-16.5053317,-68.1237321], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private cargarVeterinarias(): void {
    this.mapaService.obtenerVeterinarias().subscribe(veterinarias => {
      veterinarias.forEach(veterinaria => {
        L.marker([veterinaria.latitud, veterinaria.longitud])
          .bindPopup(veterinaria.nombre)
          .addTo(this.capasVeterinarias);
      });
      this.capasVeterinarias.addTo(this.map);
    });
  }

  private cargarRefugios(): void {
    this.mapaService.obtenerRefugios().subscribe(refugios => {
      refugios.forEach(refugio => {
        L.marker([refugio.latitud, refugio.longitud])
          .bindPopup(refugio.nombre)
          .addTo(this.capasRefugios);
      });
      this.capasRefugios.addTo(this.map);
    });
  }

  private cargarAreas(): void {
    this.mapaService.obtenerAreas().subscribe(areas => {
      areas.forEach(area => {
        const coordenadasPoligono: L.LatLngExpression[] = area.coordenadas.map(c => [c.latitud, c.longitud]);
        L.polygon(coordenadasPoligono)
          .bindPopup('Área de cobertura')
          .addTo(this.capasAreas);
      });
      this.capasAreas.addTo(this.map);
    });
  }
  mostrarTodo(): void {
    this.map.addLayer(this.capasVeterinarias);
    this.map.addLayer(this.capasRefugios);
    this.map.addLayer(this.capasAreas);
  }

  mostrarVeterinarias(): void {
    this.map.removeLayer(this.capasRefugios);
    this.map.removeLayer(this.capasAreas);
    this.map.addLayer(this.capasVeterinarias);
  }

  mostrarRefugios(): void {
    this.map.removeLayer(this.capasVeterinarias);
    this.map.removeLayer(this.capasAreas);
    this.map.addLayer(this.capasRefugios);
  }

  mostrarAreas(): void {
    this.map.removeLayer(this.capasVeterinarias);
    this.map.removeLayer(this.capasRefugios);
    this.map.addLayer(this.capasAreas);
  }

}
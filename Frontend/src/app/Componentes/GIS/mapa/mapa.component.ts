import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import { MapaService } from '../../services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit{
  private capasVeterinarias: L.LayerGroup<any> = L.layerGroup();
  private capasRefugios: L.LayerGroup<any> = L.layerGroup();
  private capasAreas: L.LayerGroup<any> = L.layerGroup();
  mapReady: boolean = false;

  @ViewChild('map')
  mapContainer!: ElementRef;
  map: any;

  constructor(private mapaService: MapaService) {}

  ngOnInit() {
    // Aquí puedes añadir cualquier inicialización necesaria para el componente
  }

  ngAfterViewInit(): void {
    this.inicializarMapa();
  }

  private inicializarMapa(): void {
    L.Icon.Default.mergeOptions({
      shadowUrl: 'assets/marker-shadow.png'
    });

    if (this.mapContainer) {
      this.map = L.map(this.mapContainer.nativeElement).setView([-16.5042618,-68.1199556], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    console.log('Mapa cargado');
      this.mapReady = true; // Indica que el mapa está listo
      this.cargarRefugios();
      this.cargarVeterinarias();
    }
    console.log(this.mapReady);
  }
  

  private cargarVeterinarias(): void {
    this.mapaService.obtenerVeterinarias().subscribe(veterinarias => {
      veterinarias.forEach(veterinaria => {
        // Asegúrate de usar los nombres de las propiedades correctos
        const latitud = parseFloat(veterinaria.c_X);
        const longitud = parseFloat(veterinaria.c_Y);
  
        if (!isNaN(latitud) && !isNaN(longitud)) {
          L.marker([latitud, longitud])
            .bindPopup(`Nombre:${veterinaria.nombre} Dirección:${veterinaria.direccion}  Cantidad de mascotas registradas:${veterinaria.mascotas_at} Cantidad de personal:${veterinaria.cant_person}`)
            .addTo(this.capasVeterinarias);
        } else {
          console.error('Coordenadas inválidas:', veterinaria.c_Y, veterinaria.c_X);
        }
      });
      this.capasVeterinarias.addTo(this.map);
    });
  }

  private cargarRefugios(): void {
    this.mapaService.obtenerRefugios().subscribe(refugios => {
      refugios.forEach(refugio => {
        // Asegúrate de usar los nombres de las propiedades correctos
        const latitud = parseFloat(refugio.c_X);
        const longitud = parseFloat(refugio.c_Y);
  
        if (!isNaN(latitud) && !isNaN(longitud)) {
          L.marker([latitud, longitud])
            .bindPopup(`Nombre:${refugio.nombre} Dirección:${refugio.direccion}  Cantidad de animales refugiados:${refugio.cant_animal} Espacio total:${refugio.espa_tot}`)
            .addTo(this.capasRefugios);
        } else {
          console.error('Coordenadas inválidas:', refugio.c_Y, refugio.c_X);
        }
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
    if (this.mapReady) {
      this.map.removeLayer(this.capasVeterinarias);
      this.map.removeLayer(this.capasAreas);
      this.map.addLayer(this.capasRefugios);
    }
  }  

  mostrarAreas(): void {
    this.map.removeLayer(this.capasVeterinarias);
    this.map.removeLayer(this.capasRefugios);
    this.map.addLayer(this.capasAreas);
  }

}
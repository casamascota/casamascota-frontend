import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veterinaria } from "../interfaces/veterinaria";
import { Refugio } from "../interfaces/refugio";
import { Area } from "../interfaces/area";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class MapaService {
    private apiUrl = 'http://localhost:8080/api/v1';
  
    constructor(private http: HttpClient) { }
  
    obtenerVeterinarias(): Observable<Veterinaria[]> {
      return this.http.get<Veterinaria[]>(`${this.apiUrl}/veterinarias/`);
    }
  
    obtenerRefugios(): Observable<Refugio[]> {
      return this.http.get<Refugio[]>(`${this.apiUrl}/refugios/`);
    }
  
    obtenerAreas(): Observable<Area[]> {
      return this.http.get<Area[]>(`${this.apiUrl}/areas`);
    }
  }
  
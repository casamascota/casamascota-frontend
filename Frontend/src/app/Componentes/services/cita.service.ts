import { Injectable } from "@angular/core";
import { Cita_Admin } from "../interfaces/cita-adm";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class CitasService{
    URL_BASE = 'http://localhost:3000/api/v1/';
    constructor(private httpClient: HttpClient) {}

    async getCitas(): Promise<Cita_Admin[]> {
      const url = this.URL_BASE + 'citas';
      try {
        const res = await this.httpClient.get(url).toPromise();
        console.log(res);
        return res as Cita_Admin[];
      } catch (err) {
        console.error(err);
        return [];
      }
    }    
}

import { Injectable } from "@angular/core";
import { Cirugia_Admin } from "../interfaces/cirugia-adm";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class CirugiasService{
    URL_BASE = 'http://localhost:3000/api/v1/';
    constructor(private httpClient: HttpClient) {}

    async getCirugias(): Promise<Cirugia_Admin[]> {
      const url = this.URL_BASE + 'cirugias';
      try {
        const res = await this.httpClient.get(url).toPromise();
        console.log(res);
        return res as Cirugia_Admin[];
      } catch (err) {
        console.error(err);
        return [];
      }
    }    
}

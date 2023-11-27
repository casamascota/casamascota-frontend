import { Injectable } from "@angular/core";
import { Tratamiento_Admin } from "../interfaces/tratamiento-adm";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class TratamientoService {
  URL_BASE = 'http://localhost:3000/api/v1/';

  constructor(private httpClient: HttpClient) {}

  getTratamientos(): Promise<Tratamiento_Admin[]> {
    const url = this.URL_BASE + 'tratamientos';
    return this.httpClient.get(url).toPromise()
      .then((res: any) => {
        console.log(res);
        return res as Tratamiento_Admin[];
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
}

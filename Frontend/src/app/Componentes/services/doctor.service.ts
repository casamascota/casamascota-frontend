import { Injectable } from "@angular/core";
import { Doctor_Admin } from "../interfaces/doctor-adm";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class DoctoresService {
  URL_BASE = 'http://localhost:3000/api/v1/';

  constructor(private httpClient: HttpClient) {}

  getDoctores(): Promise<Doctor_Admin[]> {
    const url = this.URL_BASE + 'doctores';
    return this.httpClient.get(url).toPromise()
      .then((res: any) => {
        console.log(res);
        return res as Doctor_Admin[];
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
}

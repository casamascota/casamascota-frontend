import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DetallesMascotaComponent } from '../../Usuario/detalles-mascota/detalles-mascota.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  URL_BASE = 'http://localhost:3000/api/';
  mascotasList: any[] = [];

  constructor(private httpClient: HttpClient,private dialog: MatDialog) {
  this.getListaFormateada();
  }
  ngOnInit(): void {
    
  }

  getAllMascotas() {
      this.httpClient.get(this.URL_BASE + 'mascotas').subscribe(
         (res: any) => {
         this.mascotasList = res;
         //console.log(this.mascotasList);
      },
      err => {
         console.log(err);
         }
      );
   }

  _getMascotas(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'mascotas');
  }

   abrirDetalleMascota(mascota: any) {
      const dialogRef = this.dialog.open(DetallesMascotaComponent, {
         width: '600px',
         data: mascota
       });
      }


  _getOwner(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'owners');
  }

  getListaFormateada() {
    this._getMascotas().subscribe(
      (res) => {
        const auxLista = res;
        this.mascotasList = res;

        for (let i = 0; i < auxLista.length; i++) {
          this.getOwnerById(auxLista[i].Owner_id_owner).subscribe(
            (res) => {
              auxLista[i].Owner_id_owner = res.nombre + " " + res.apellido;
              console.log(auxLista[i].Owner_id_owner);
              this.mascotasList = auxLista;
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMascota(idMascota: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}mascotas/${idMascota}`);
  }

  getOwnerById(idOwner: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}owners/${idOwner}`);
  }
}

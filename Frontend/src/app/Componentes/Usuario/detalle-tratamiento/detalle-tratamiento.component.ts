import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles-tratamiento',
  templateUrl: './detalle-tratamiento.component.html',
  styleUrls: ['./detalle-tratamiento.component.css']
})
export class DetalleTratamientoComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalleTratamientoComponent>,
    @Inject(MAT_DIALOG_DATA) public tratamiento: any,
    private httpClient: HttpClient
  ) {
    alert(JSON.stringify(tratamiento));
    this.getTratamientoCirugia(tratamiento.id_trat);
   }
  


   getTratamientoCirugia(id_trat : number){
    this.httpClient.get('http://localhost:3000/api/cirugias/tratamiento/'+id_trat).subscribe(
      (res: any) => {
      this.tratamiento.cirugias = res;
      console.log(this.tratamiento.cirugias);
   },
    err => {
      console.log(err);
      }
    );


   
}
}

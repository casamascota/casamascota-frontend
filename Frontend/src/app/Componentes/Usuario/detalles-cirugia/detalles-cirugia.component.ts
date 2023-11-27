import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles-cirugia',
  templateUrl: './detalles-cirugia.component.html',
  styleUrls: ['./detalles-cirugia.component.css']
})
export class DetallesCirugiaComponent {
  constructor(
    public dialogRef: MatDialogRef<DetallesCirugiaComponent>,
    @Inject(MAT_DIALOG_DATA) public cirugia: any,
    private httpClient: HttpClient
  ) {
    alert(JSON.stringify(cirugia));
    this.getDoctor(cirugia.Doctor_id_doctor);
    this.getEnfermero(cirugia.Enfermero_id_enfermero);
    this.getDiagnostico(cirugia.Diagnostico_id_diagnostico);
  }

  getDoctor(idDoctor: number) {
    this.httpClient.get('http://localhost:3000/api/doctores/' + idDoctor).subscribe(
      (res: any) => {
        this.cirugia.doctor = res;
        console.log(this.cirugia.doctor);
      },
      err => {
        console.log(err);
      }
    );
  }

  getEnfermero(idEnfermero: number) {
    this.httpClient.get('http://localhost:3000/api/enfermeros/' + idEnfermero).subscribe(
      (res: any) => {
        this.cirugia.enfermero = res;
        console.log(this.cirugia.enfermero);
      },
      err => {
        console.log(err);
      }
    );
  }

  getDiagnostico(idDiagnostico: number) {
    this.httpClient.get('http://localhost:3000/api/diagnosticos/' + idDiagnostico).subscribe(
      (res: any) => {
        this.cirugia.diagnostico = res;
        console.log(this.cirugia.diagnostico);
      },
      err => {
        console.log(err);
      }
    );
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tratamiento_Admin } from 'src/app/Componentes/interfaces/tratamiento-adm';

@Component({
  selector: 'app-modal-update-tratamientos',
  templateUrl: './modal-update-tratamientos.component.html',
  styleUrls: ['./modal-update-tratamientos.component.css']
})
export class ModalUpdateTratamientosComponent implements OnInit{
  formularioAdmTrat: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalUpdateTratamientosComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.formularioAdmTrat = this.formBuilder.group({
      fecha_inicio: [null, Validators.required],
      fecha_final: [null, Validators.required],
      Diagnostico_id_diagnostico: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarTrat();
  }

  buscarTrat() {
    const url = this.URL_BASE + 'tratamientos/';
    this.http.get<Tratamiento_Admin>(url + this.data.id).subscribe(
      res => {
        console.log(res);

        if (res) {
          this.formularioAdmTrat.patchValue({
            fecha_inicio: res.fecha_inicio,
            fecha_final: res.fecha_final,
            Diagnostico_id_diagnostico: res.Diagnostico_id_diagnostico,
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarformularioAdmTrat() {
    if (this.formularioAdmTrat.valid) {
      const url = this.URL_BASE + 'tratamientos/';
      const formData = {
        fecha_inicio: this.formularioAdmTrat.get('fecha_inicio')?.value,
        fecha_final: this.formularioAdmTrat.get('fecha_final')?.value,
        Diagnostico_id_diagnostico: this.formularioAdmTrat.get('Diagnostico_id_diagnostico')?.value,
      };

      this.http.put(url + this.data.id, formData).subscribe(
        res => {
          console.log(res);
          alert('Cirugia actualizada correctamente');
          this.closeModal();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}

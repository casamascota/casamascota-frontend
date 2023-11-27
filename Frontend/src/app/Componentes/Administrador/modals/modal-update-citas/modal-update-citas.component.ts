import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cita_Admin } from 'src/app/Componentes/interfaces/cita-adm';

@Component({
  selector: 'app-modal-update-citas',
  templateUrl: './modal-update-citas.component.html',
  styleUrls: ['./modal-update-citas.component.css']
})
export class ModalUpdateCitasComponent {
  formularioAdmCit: FormGroup;
  Servicio_id_servicio: any = ['Veterinario', 'Estilista'];
  URL_BASE = 'http://localhost:3000/api/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalUpdateCitasComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.formularioAdmCit = this.formBuilder.group({
      fecha: [null, Validators.required],
      hora: [null, Validators.required],
      Servicio_id_servicio: ['',Validators.required],
      Mascota_id_mascota : [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarCit();
  }

  buscarCit() {
    const url = this.URL_BASE + 'citas/';
    this.http.get<Cita_Admin>(url + this.data.id).subscribe(
      res => {
        console.log(res);

        if (res) {
          this.formularioAdmCit.patchValue({
            id_cita: res.id_cita,
            fecha: res.fecha,
            hora: res.hora,
            Mascota_id_mascota: res.Mascota_id_mascota,
            Servicio_id_servicio: res.Servicio_id_servicio,
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarFormularioAdmCit() {
    if (this.formularioAdmCit.valid) {
      const url = this.URL_BASE + 'citas/';
      const formData = {
        id_cita: this.formularioAdmCit.get('id_cita')?.value,
        fecha: this.formularioAdmCit.get('fecha')?.value,
        hora: this.formularioAdmCit.get('hora')?.value,
        Mascota_id_mascota: this.formularioAdmCit.get('Mascota_id_mascota')?.value,
        Servicio_id_servicio: this.formularioAdmCit.get('Servicio_id_servicio')?.value,
      };

      this.http.put(url + this.data.id, formData).subscribe(
        res => {
          console.log(res);
          alert('Citas actualizado correctamente');
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

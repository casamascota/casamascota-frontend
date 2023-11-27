import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cirugia_Admin } from 'src/app/Componentes/interfaces/cirugia-adm';

@Component({
  selector: 'app-modal-update-cirugia',
  templateUrl: './modal-update-cirugia.component.html',
  styleUrls: ['./modal-update-cirugia.component.css']
})
export class ModalUpdateCirugiaComponent {
  formularioAdmCir: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalUpdateCirugiaComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.formularioAdmCir = this.formBuilder.group({
      fecha: [null, Validators.required],
      cirugiahecha: [null, Validators.required],
      Doctor_id_doctor: [null, Validators.required],
      Enfermero_id_enfermero: [null, Validators.required],
      Diagnostico_id_diagnostico: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarCir();
  }

  buscarCir() {
    const url = this.URL_BASE + 'cirugias/';
    this.http.get<Cirugia_Admin>(url + this.data.id).subscribe(
      res => {
        console.log(res);

        if (res) {
          this.formularioAdmCir.patchValue({
            fecha: res.fecha,
            cirugiahecha: res.cirugiahecha,
            Doctor_id_doctor: res.Doctor_id_doctor,
            Enfermero_id_enfermero: res.Enfermero_id_enfermero,
            Diagnostico_id_diagnostico: res.Diagnostico_id_diagnostico,
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarformularioAdmCir() {
    if (this.formularioAdmCir.valid) {
      const url = this.URL_BASE + 'cirugias/';
      const formData = {
        fecha: this.formularioAdmCir.get('fecha')?.value,
        cirugiahecha: this.formularioAdmCir.get('cirugiahecha')?.value,
        Doctor_id_doctor: this.formularioAdmCir.get('Doctor_id_doctor')?.value,
        Enfermero_id_enfermero: this.formularioAdmCir.get('Enfermero_id_enfermero')?.value,
        Diagnostico_id_diagnostico: this.formularioAdmCir.get('Diagnostico_id_diagnostico')?.value,
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

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor_Admin } from 'src/app/Componentes/interfaces/doctor-adm';

@Component({
  selector: 'app-modal-update-doctor',
  templateUrl: './modal-update-doctor.component.html',
  styleUrls: ['./modal-update-doctor.component.css']
})
export class ModalUpdateDoctorComponent {
  formularioAdmDoc: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalUpdateDoctorComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.formularioAdmDoc = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
      direccion: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarDoc();
  }

  buscarDoc() {
    const url = this.URL_BASE + 'doctores/';
    this.http.get<Doctor_Admin>(url + this.data.id).subscribe(
      res => {
        console.log(res);

        if (res) {
          this.formularioAdmDoc.patchValue({
            nombre: res.nombre,
            apellido: res.apellido,
            numero_tel: res.numero_tel,
            direccion: res.direccion,
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarFormularioAdmDoc() {
    if (this.formularioAdmDoc.valid) {
      const url = this.URL_BASE + 'doctores/';
      const formData = {
        nombre: this.formularioAdmDoc.get('nombre')?.value,
        apellido: this.formularioAdmDoc.get('apellido')?.value,
        numero_tel: this.formularioAdmDoc.get('numero_tel')?.value,
        direccion: this.formularioAdmDoc.get('direccion')?.value,
      };

      this.http.put(url + this.data.id, formData).subscribe(
        res => {
          console.log(res);
          alert('Doctor actualizado correctamente');
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

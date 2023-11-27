import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Doctor_Admin } from '../../interfaces/doctor-adm';

@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css']
})
export class ActualizarRegistroComponent implements OnInit {
  Noencontrado: boolean;
  formularioAdmDoc: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formularioAdmDoc = this.formBuilder.group({
      id_doctor: [null, Validators.required],
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
      direccion: [null, Validators.required],
    });
    this.Noencontrado = false;
  }

  ngOnInit() {
  }

  buscarDoc() {
    const IDDoctor = this.formularioAdmDoc.get('id_doctor')?.value;
    console.log(IDDoctor);

    const url = this.URL_BASE + 'doctores/';
    this.http.get<Doctor_Admin>(url + IDDoctor).subscribe(
      res => {
        console.log(res);

        if (res) {
          this.formularioAdmDoc.patchValue({
            nombre: res.nombre,
            apellido: res.apellido,
            numero_tel: res.numero_tel,
            direccion: res.direccion,
          });
        
          this.Noencontrado = false;
        } else {
          this.Noencontrado = true;
        }
      },
      err => {
        console.log(err);
        this.Noencontrado = true;
      }
    )
  }

  actualizarFormularioAdmDoc() {
    if (this.formularioAdmDoc.valid) {
      const url = this.URL_BASE + 'doctores/';
      const IDDoctor = this.formularioAdmDoc.get('id_doctor')?.value;
      const formData = {
        nombre: this.formularioAdmDoc.get('nombre')?.value,
        apellido: this.formularioAdmDoc.get('apellido')?.value,
        numero_tel: this.formularioAdmDoc.get('numero_tel')?.value,
        direccion: this.formularioAdmDoc.get('direccion')?.value,
      };

      this.http.put(url + IDDoctor, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

      console.log(this.formularioAdmDoc.value);
    }
  }
}

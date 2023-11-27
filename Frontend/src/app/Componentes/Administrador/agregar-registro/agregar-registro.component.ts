import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DoctoresService } from '../../services/doctor.service';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})

export class AgregarRegistroComponent{
  selectedForm: string;
  formularioAdmDoc: FormGroup;
  formularioEnfermero: FormGroup;
  formularioOwner: FormGroup;
  formularioEstilista: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formularioAdmDoc = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
      direccion: [null, Validators.required],
    });
    this.formularioEnfermero = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
      direccion: [null, Validators.required],
    });
    this.formularioOwner = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
      direccion: [null, Validators.required],
      correo: [null, Validators.required],
    });
    this.formularioEstilista = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
    });

    this.selectedForm = 'doctor/admin';
  }
  
  enviarFormularioAdmDoc() {
    if (this.formularioAdmDoc.valid) {
      const url = this.URL_BASE + 'doctores';
      const formData = this.formularioAdmDoc.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
          alert('Doctor guardado con exito');
        },
        err => {
          console.log(err);
        }
      )

      console.log(this.formularioAdmDoc.value);

    }
  }
  
  enviarFormularioEnfermero() {
    if (this.formularioEnfermero.valid) {
      const url = this.URL_BASE + 'enfermeros';
      const formData = this.formularioEnfermero.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
          alert('Enfermero guardado con exito');
        },
        err => {
          console.log(err);
        }
      )

      console.log(this.formularioEnfermero.value);
    }
  }

  enviarFormularioOwner() {
    if (this.formularioOwner.valid) {
      const url = this.URL_BASE + 'owners';
      const formData = this.formularioOwner.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
          alert('Owner guardado con exito');
        },
        err => {
          console.log(err);
        }
      )

      console.log(this.formularioOwner.value);
    }
  }

  enviarFormularioEstilista() {
    if (this.formularioEstilista.valid) {
      const url = this.URL_BASE + 'estilistas';
      const formData = this.formularioEstilista.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
          alert('Estilista guardado con exito');
        },
        err => {
          console.log(err);
        }
      )

      console.log(this.formularioEstilista.value);
    }
  }

  
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona-component.component.html',
  styleUrls: ['./crear-persona-component.component.css']
})
export class CrearPersonaComponent {
  formularioPersona: FormGroup;
  URL_BASE = 'http://localhost:8080/api/v1/persona/';

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private http: HttpClient
  ) {
    this.formularioPersona = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numero_tel: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  enviarFormularioPersona() {
    if (this.formularioPersona.valid) {
      this.http.post(this.URL_BASE, this.formularioPersona.value).subscribe(
        res => {
          console.log(res);
          alert('Persona creada con éxito');
          this.regresar(); // Regresar automáticamente después de crear
        },
        err => {
          console.error(err);
          alert('Error al crear la persona');
        }
      );
    }
  }

  regresar() {
    this.router.navigate(['/agregar_registro']); 
}
}

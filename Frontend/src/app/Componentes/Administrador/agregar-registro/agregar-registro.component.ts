import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DoctoresService } from '../../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})

export class AgregarRegistroComponent{
  personas: any[] = [];
  URL_BASE = 'http://localhost:8080/api/v1/';
formularioUsuario: any;

  constructor(private router: Router,private http: HttpClient, private formBuilder: FormBuilder) {
    // Inicializa tu formulario aquí
    this.formularioUsuario = this.formBuilder.group({
      username: [null, Validators.required],
      hashed_password: [null, Validators.required],
      rol: [null, Validators.required],
      id_persona: [null, Validators.required],
      especialidad: [null] // Opcional, solo para doctores
    });
    
  }
  irCrearPersona() {
    this.router.navigate(['/crear-persona']);
  }
  
  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas() {
    // Realiza la solicitud GET a tu API
    const url = 'http://localhost:8080/api/v1/personas/';
    this.http.get(url).subscribe(
      (data: any) => {
        this.personas = data;
      },
      err => console.log(err)
    );
  }

  enviarFormulario() {
    if (this.formularioUsuario.valid) {
      const url = this.URL_BASE + 'usuario/';
      const formData = {
        ...this.formularioUsuario.value,
        persona: { id_persona: this.formularioUsuario.value.id_persona }
      };
  
      this.http.post(url, formData).subscribe(
        res => {
          console.log('Respuesta del servidor:', res);
          alert('Usuario guardado con éxito');
        },
        err => {
          console.error('Error al enviar el formulario:', err);
        }
      );
    } else {
      console.log('Formulario no válido:', this.formularioUsuario.value);
    }
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agenda-cita-doctor',
  templateUrl: './agenda-cita-doctor.component.html',
  styleUrls: ['./agenda-cita-doctor.component.css']
})
export class AgendaCitaDoctorComponent {
  reservaForm: FormGroup;
  Servicio_id_servicio: any[] = ['Veterinario', 'Estilista'];
  URL_BASE = 'http://localhost:3000/api/';

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) {
    this.reservaForm = this.formBuilder.group({
      fecha: [null, Validators.required],
      hora: [null, Validators.required],
      Servicio_id_servicio: ['', Validators.required],
      Mascota_id_mascota: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      console.log(this.reservaForm.value);
      this.guardarCita();
    }
  }

  guardarCita() {
    const formData = this.reservaForm.value;

    this.httpClient.post(this.URL_BASE + 'citas', formData).subscribe(
      (res) => {
        console.log(res);
        alert('Cita guardada con éxito');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

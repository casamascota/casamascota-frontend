import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tratamiento-formulario-doctor',
  templateUrl: './tratamiento-formulario-doctor.component.html',
  styleUrls: ['./tratamiento-formulario-doctor.component.css']
})
export class TratamientoFormularioDoctorComponent {
  formTratamiento: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) { 
    this.formTratamiento = this.formBuilder.group({
      fecha_inicio: ['',Validators.required],
      fecha_final: ['',Validators.required],
      Diagnostico_id_diagnostico: ['',Validators.required]
     
    });
  }

  onSubmit() {
    console.log(this.formTratamiento.value);
    this.guardarTratamiento();
  }

  guardarTratamiento() {
    this.httpClient.post(this.URL_BASE + 'tratamientos', this.formTratamiento.value).subscribe(
      (response: any) => {
        console.log(response);
        this.enviarCorreo();
        alert('Tratamiento guardado con exito');
      },
      (error) => console.log(error)
    );
  }

  enviarCorreo() {
    const url = this.URL_BASE + 'email/send';
    const correo = 'diego.tiger.ac@gmail.com'; // Cambia por la dirección de correo a la que deseas enviar el correo
    const formData = {
      to: correo,
      subject: 'Actualizacion de Tratamiento',
      text: 'Esperamos que este correo te encuentre bien. En Casa de la Mascota, nos complace brindarte un excelente servicio y cuidado para tu amada mascota. Queremos informarte que hemos realizado una actualización en el tratamiento de tu mascota, con el objetivo de garantizar su bienestar y mejorar su calidad de vida.  Nos gustaría recordarte que, como dueño responsable, desempeñas un papel fundamental en el cuidado de tu mascota.'
    };

    this.httpClient.post(url, formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  
}

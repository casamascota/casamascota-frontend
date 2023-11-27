import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cirugia-formulario-doctor',
  templateUrl: './cirugia-formulario-doctor.component.html',
  styleUrls: ['./cirugia-formulario-doctor.component.css']
})
export class CirugiaFormularioDoctorComponent {
  formCirugia: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  //la cirugia por defecto estara en 1 que significa
  //Que por defecto esta activa(pendiente)

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) { 
    this.formCirugia = this.formBuilder.group({
      fecha: ['',Validators.required],
      cirugiahecha:[1, Validators.required],
      Doctor_id_doctor: ['',Validators.required],
      Enfermero_id_enfermero: ['',Validators.required],
      Diagnostico_id_diagnostico: ['',Validators.required]
     
    });
  }

  onSubmit() {
    console.log(this.formCirugia.value);
    this.guardarCirugia();
  }

  guardarCirugia() {
    this.httpClient.post(this.URL_BASE + 'cirugias', this.formCirugia.value).subscribe(
      (response: any) => {
        console.log(response);
        alert('Cirugia guardada con exito');
      },
      (error) => console.log(error)
    );
  }  
}
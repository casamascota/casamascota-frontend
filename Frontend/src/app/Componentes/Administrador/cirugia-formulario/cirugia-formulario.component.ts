import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cirugia-formulario',
  templateUrl: './cirugia-formulario.component.html',
  styleUrls: ['./cirugia-formulario.component.css']
})
export class CirugiaFormularioComponent {
  formCirugia: FormGroup;
  URL_BASE = 'http://localhost:8080/api/v1/';
  doctores: any[] = [];
  enfermeros: any[] = [];
  owners: any[] = [];
  http: any;
  minDate: string; // Variable para almacenar la fecha mínima
  //la cirugia por defecto estara en 1 que significa
  //Que por defecto esta activa(pendiente)

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) {
    const today = new Date();
  // Estableciendo la fecha mínima como la fecha actual
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Recordar que getMonth() comienza desde 0
  const day = today.getDate();
  this.minDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`; 
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
  
  ngOnInit(): void {
    this.cargarDoctores();
    this.cargarEnfermeros();
    this.cargarOwner();
  }

  cargarDoctores() {
    const url = this.URL_BASE + 'usuarios/';
    this.httpClient.get(url).subscribe(
      (data: any) => {
        this.doctores = data.filter((usuario: any) => usuario.rol === 'Doctor');
      },
      (err: any) => console.log(err)
    );
  }
  cargarEnfermeros() {
    const url = this.URL_BASE + 'usuarios/';
    this.httpClient.get(url).subscribe(
      (data: any) => {
        this.enfermeros = data.filter((usuario: any) => usuario.rol === 'Enfermero');
      },
      (err: any) => console.log(err)
    );
  }
  cargarOwner() {
    const url = this.URL_BASE + 'usuarios/';
    this.httpClient.get(url).subscribe(
      (data: any) => {
        this.owners = data.filter((usuario: any) => usuario.rol === 'Owner');
      },
      (err: any) => console.log(err)
    );
  }
}



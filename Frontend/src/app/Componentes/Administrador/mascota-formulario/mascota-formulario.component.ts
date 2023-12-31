import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-mascota-formulario',
  templateUrl: './mascota-formulario.component.html',
  styleUrls: ['./mascota-formulario.component.css'],
})
export class MascotaFormularioComponent {
  owners: any[] = [];
  router: any;
  ngOnInit(): void {
    this.cargarOwner();

  }
  usuarios: any[] = [];
  tieneDueno: boolean = false;
  formMascota: FormGroup;
  genero: any = ['Macho', 'Hembra'];
  URL_BASE = 'http://localhost:8080/api/v1/';
  maxFechaNacimiento: string;
  especies: string[] = ['Perro', 'Gato', 'Pez','Ave','Conejo'];
  // id_mascota: number = 0;
  // email: string = "";
  // mensaje: string = "";

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) { 
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Los meses comienzan desde 0
    const day = today.getDate();
    this.maxFechaNacimiento = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    this.formMascota = this.formBuilder.group({
      id_usuario: [''] ,
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      genero: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      especie: ['', Validators.required],
      peso: ['', Validators.required],
      isAdopted: [false],  // Cambiado a false por defecto
      Owner_id_owner: ['']  // Hacemos este campo opcional
    });
    this.cargarOwner();
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

  onTieneDuenoChange() {
    this.tieneDueno = !this.tieneDueno;
    if (!this.tieneDueno) {
      this.formMascota.get('id_usuario')?.setValue(null);
    }
  }
  
  guardarMascota() {
    if (this.formMascota.valid) {
      const formData = this.formMascota.value;
      // Asignar el ID del dueño si la mascota está adoptada, de lo contrario null
      const ownerId = formData.isAdopted && formData.id_usuario ? formData.id_usuario : null;
  
      const mascotaData = {
        nombre: formData.nombre,
        raza: formData.raza,
        genero: formData.genero,
        fecha_nacimiento: formData.fecha_nacimiento,
        peso: formData.peso,
        especie: formData.especie,
        usuario: { id_usuario: ownerId },
        enadopcion: !formData.isAdopted
      };
      const url = this.URL_BASE + 'mascota/';
      this.httpClient.post(url, mascotaData).subscribe(
        res => {
          console.log(res);
          alert('Mascota guardada con éxito');
        },
        err => {
          console.error('Error al guardar la mascota:', err);
        }
      );
    } else {
      console.error('Formulario no válido:', this.formMascota.value);
    }
  }
  


  
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-estilista',
  templateUrl: './form-estilista.component.html',
  styleUrls: ['./form-estilista.component.css']
})
export class FormEstilistaComponent {
  estilistaForm: FormGroup;
  URL_BASE = 'http://localhost:3000/api';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.estilistaForm = this.formBuilder.group({
      id_estilista: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numero_tel: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.estilistaForm.valid) {
      console.log(this.estilistaForm.value);
      this.createEstilista();
      // Realizar la acción deseada con los datos del formulario
    }
  }

  createEstilista() {
    const formValue = this.estilistaForm.value;
    this.http.post(this.URL_BASE + '/estilistas', formValue).subscribe((res: any) => {
      console.log(res);
    }),
      (err: any) => {
        console.log(err);
      }
      
  }

}

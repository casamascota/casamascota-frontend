import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-revision',
  templateUrl: './form-revision.component.html',
  styleUrls: ['./form-revision.component.css']
})
export class FormRevisionComponent {
  URL_BASE = 'http://localhost:3000/api';
  revisionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.revisionForm = this.formBuilder.group({
      fecha_revision: ['', Validators.required],
      sistema_car: ['', Validators.required],
      peso: ['', Validators.required],
      sistema_nervioso: ['', Validators.required],
      Cita_Agendada_id_cita: ['', Validators.required],
      Doctor_id_doctor: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.revisionForm.valid) {
      console.log(this.revisionForm.value);
      this.createRevision();
    }
  }

  createRevision(){
    this.http.post(this.URL_BASE + '/revision', this.revisionForm.value).subscribe((data: any) => {
      console.log(data);
    }
    ),
      (error: any) => {
        console.log(error);
      }

  }


}

import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalUpdateDoctorComponent } from './modal-update-doctor.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal(id: number): MatDialogRef<ModalUpdateDoctorComponent> {
    return this.dialog.open(ModalUpdateDoctorComponent, {
      data: {id}
    });
  }
}

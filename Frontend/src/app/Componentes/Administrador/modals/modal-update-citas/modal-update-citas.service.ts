import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalUpdateCitasComponent } from './modal-update-citas.component';

@Injectable({
  providedIn: 'root'
})
export class ModalUpdateCitasService {

  constructor(private dialog: MatDialog) { }

  openModal(id: number): MatDialogRef<ModalUpdateCitasComponent> {
    return this.dialog.open(ModalUpdateCitasComponent, {
      data: {id}
    });
  }
}

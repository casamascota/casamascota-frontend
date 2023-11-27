import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalUpdateTratamientosComponent } from './modal-update-tratamientos.component';

@Injectable({
  providedIn: 'root'
})
export class ModalUpdateTratamientosService {

  constructor(private dialog: MatDialog) { }

  openModal(id: number): MatDialogRef<ModalUpdateTratamientosComponent> {
    return this.dialog.open(ModalUpdateTratamientosComponent, {
      data: {id}
    });
  }
}
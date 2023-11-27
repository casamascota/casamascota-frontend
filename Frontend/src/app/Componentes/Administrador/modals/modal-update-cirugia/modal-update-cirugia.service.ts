import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalUpdateCirugiaComponent } from './modal-update-cirugia.component';

@Injectable({
  providedIn: 'root'
})
export class ModalUpdateCirugiaService {

  constructor(private dialog: MatDialog) { }

  openModal(id: number): MatDialogRef<ModalUpdateCirugiaComponent> {
    return this.dialog.open(ModalUpdateCirugiaComponent, {
      data: {id}
    });
  }
}

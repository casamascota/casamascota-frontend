import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Tratamiento_Admin } from '../../interfaces/tratamiento-adm';
import { MatTableDataSource } from '@angular/material/table';
import { TratamientoService } from '../../services/tratamiento.service';
import { HttpClient } from '@angular/common/http';
import { ModalUpdateTratamientosService } from '../modals/modal-update-tratamientos/modal-update-tratamientos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DetallesMascotaComponent } from '../../Usuario/detalles-mascota/detalles-mascota.component';
import { Observable } from 'rxjs';
import { DetalleTratamientoComponent } from '../../Usuario/detalle-tratamiento/detalle-tratamiento.component';

@Component({
  selector: 'app-lista-tratamientos-doctor',
  templateUrl: './lista-tratamientos-doctor.component.html',
  styleUrls: ['./lista-tratamientos-doctor.component.css']
})
export class ListaTratamientosDoctorComponent {
  formularioAdmTrat: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  tratamientosList: Tratamiento_Admin[] = [];

  displayedColumns: string[] = ['id_trat','fecha_inicio','fecha_final', 'Diagnostico_id_diagnostico','acciones'];
  dataSource!: MatTableDataSource<Tratamiento_Admin>;
  pageSize = 10; // Define el número de elementos por página
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private formBuilder: FormBuilder, private _tratamientoService: TratamientoService, private http: HttpClient, private modalUpdateTratamientoService: ModalUpdateTratamientosService) {
    this.formularioAdmTrat = this.formBuilder.group({
      id_trat: [1, Validators.required],
      fecha_inicio: [null, Validators.required],
      fecha_final: [null, Validators.required],
      Diagnostico_id_diagnostico: [null, Validators.required],
    });
    this.cargarTratamientos();
  }

  ngOnInit(){
  }

  async cargarTratamientos() {
    try {
      this.tratamientosList = await this._tratamientoService.getTratamientos();
      console.log("Lista: ", this.tratamientosList);
      this.dataSource = new MatTableDataSource<Tratamiento_Admin>(this.tratamientosList);
  
      this.dataSource.paginator = this.paginator;
    } catch (error) {
      console.log(error);
    }
  }  

  applyPaginator(event: any) {
    this.pageSize = event.pageSize;
    // Asigna el paginador obtenido a la propiedad paginator del MatTabledataSource
    this.dataSource.paginator = this.paginator;
  }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enviarformularioAdmTrat() {
    if (this.formularioAdmTrat.valid) {
      const url = this.URL_BASE + 'cirugia';
      const formData = this.formularioAdmTrat.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

      console.log(this.formularioAdmTrat.value);
    }
  }

  modificarTrat(id: number) {
    const dialogRef = this.modalUpdateTratamientoService.openModal(id);

    dialogRef.afterClosed().subscribe(() => {
      this.cargarTratamientos();
    });
  }

  eliminarTrat(id: number) {
    console.log(id);
    const url = this.URL_BASE + 'tratamientos/';
    this.http.delete(url + id).subscribe(
      res => {
        alert('Tratamiento eliminado');
        console.log(res);
        this.cargarTratamientos();
      },
      err => {
        console.log(err);
      }
    );
  }
}

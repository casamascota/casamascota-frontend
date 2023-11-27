import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Cita_Admin } from '../../interfaces/cita-adm';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ModalUpdateCitasService } from '../modals/modal-update-citas/modal-update-citas.service';
import { MatPaginator } from '@angular/material/paginator';
import { CitasService } from '../../services/cita.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-citas-agendadas-doctor',
  templateUrl: './citas-agendadas-doctor.component.html',
  styleUrls: ['./citas-agendadas-doctor.component.css']
})
export class CitasAgendadasDoctorComponent {

  formularioAdmCit: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  citasList: Cita_Admin[] = [];

  displayedColumns: string[] = ['id_cita', 'fecha', 'hora', 'Mascota_id_mascota', 'Servicio_id_servicio', 'acciones'];
  dataSource!: MatTableDataSource<Cita_Admin>;
  pageSize = 10; // Define el número de elementos por página
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private formBuilder: FormBuilder, private _citasService: CitasService, private http: HttpClient, private modalUpdateCitasService: ModalUpdateCitasService) {
    this.formularioAdmCit = this.formBuilder.group({
      id_cita: [1, Validators.required],
      fecha: [null, Validators.required],
      hora: [null, Validators.required],
      Mascota_id_mascota: [null, Validators.required],
    });
    this.cargarCitas();
  }

  ngOnInit() {
  }

  async cargarCitas() {
    try {
      this.citasList = await this._citasService.getCitas();
      console.log("Lista: ", this.citasList);
      this.dataSource = new MatTableDataSource<Cita_Admin>(this.citasList);

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

  enviarformularioAdmCit() {
    if (this.formularioAdmCit.valid) {
      const url = this.URL_BASE + 'cirugia';
      const formData = this.formularioAdmCit.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

      console.log(this.formularioAdmCit.value);
    }
  }

  modificarCitas(id: number) {
    const dialogRef = this.modalUpdateCitasService.openModal(id);

    dialogRef.afterClosed().subscribe(() => {
      this.cargarCitas();
    });
  }

  eliminarCitas(id: number) {
    console.log(id);
    const url = this.URL_BASE + 'citas/';
    this.http.delete(url + id).subscribe(
      res => {
        alert('Cita eliminada');
        console.log(res);
        this.cargarCitas();
      },
      err => {
        console.log(err);
      }
    );
  }


  /* Este método se encarga de obtener las citas agendadas */
  _getCitasAgendadas(): Observable<any> {
    return this.http.get<any[]>(this.URL_BASE + 'citas');
  }

  /* Este se encarga de formatear, es decir agarra el id de la mascota y el id del
  servicio y los cambia por el nombre de la mascota y el tipo de servicio */

  /**
   * Recupera las citas agendadas y realiza modificaciones en los datos obtenidos.
   */
  getCitasAgendadas() {
    this._getCitasAgendadas().subscribe(
      /**
       * Se ejecuta cuando se recibe una respuesta exitosa.
       * @param {any} res - La respuesta recibida.
       */
      (res) => {
        // Almacenar la respuesta en una variable auxiliar
        const auxLista = res;

        // Actualizar la propiedad this.citasList con la respuesta recibida
        this.citasList = res;

        // Iterar sobre cada elemento de auxLista
        for (let i = 0; i < auxLista.length; i++) {
          // Llamar a this.getMascota con el ID de mascota actual
          this.getMascota(auxLista[i].Mascota_id_mascota).subscribe(
            /**
             * Se ejecuta cuando se recibe una respuesta exitosa.
             * @param {any} res - La respuesta recibida.
             */
            (res) => {
              // Actualizar el nombre de la mascota en el objeto actual de auxLista
              auxLista[i].Mascota_id_mascota = res.nombre;
            },
            /**
             * Se ejecuta cuando se produce un error.
             * @param {any} error - El error recibido.
             */
            (error) => {
              console.log(error);
            }
          );
        }

        // Iterar sobre cada elemento de auxLista
        for (let i = 0; i < auxLista.length; i++) {
          // Llamar a this.getServicio con el ID de servicio actual
          this.getServicio(auxLista[i].Servicio_id_servicio).subscribe(
            /**
             * Se ejecuta cuando se recibe una respuesta exitosa.
             * @param {any} res - La respuesta recibida.
             */
            (res) => {
              // Actualizar el tipo de servicio en el objeto actual de auxLista
              auxLista[i].Servicio_id_servicio = res.tipo;
            },
            /**
             * Se ejecuta cuando se produce un error.
             * @param {any} error - El error recibido.
             */
            (error) => {
              console.log(error);
            }
          );
        }
      },
      /**
       * Se ejecuta cuando se produce un error.
       * @param {any} error - El error recibido.
       */
      (error) => {
        console.log(error);
      }
    );
  }


  /* Obtiene la mascota por id*/
  getMascota(idMascota: number): Observable<any> {
    return this.http.get(`${this.URL_BASE}mascotas/${idMascota}`);
  }

  /* Obtiene el servicio por id*/
  getServicio(idServicio: number): Observable<any> {
    return this.http.get(`${this.URL_BASE}servicios/${idServicio}`);
  }


}
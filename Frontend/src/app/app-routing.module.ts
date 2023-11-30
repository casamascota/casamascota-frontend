import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuardFunctions } from './guards/auth.guard';

import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { AdopcionesComponent } from './Componentes/Usuario/mascotasAdopcion/adopciones.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';

import { ActualizarRegistroComponent } from './Componentes/Administrador/actualizar-registro/actualizar-registro.component';

import { MascotaFormularioComponent } from './Componentes/Administrador/mascota-formulario/mascota-formulario.component';
import { ReservaCitaComponent } from './Componentes/Usuario/reserva-cita/reserva-cita.component';
import { ListaCitasComponent } from './Componentes/Administrador/lista-citas/lista-citas.component';
import { ListaMascotasComponent } from './Componentes/Administrador/lista-mascotas/lista-mascotas.component';
import { FormRevisionComponent } from './Componentes/Administrador/form-revision/form-revision.component';
import { FormEstilistaComponent } from './Componentes/Administrador/form-estilista/form-estilista.component';
//routing de formulario tratamientos y cirugias
import { TratamientoFormularioComponent } from './Componentes/Administrador/tratamiento-formulario/tratamiento-formulario.component';
import { CirugiaFormularioComponent } from './Componentes/Administrador/cirugia-formulario/cirugia-formulario.component';
//routing de listas tratamientos y cirugias
import { ListaCirugiasComponent } from './Componentes/Administrador/lista-cirugias/lista-cirugias.component';
import { ListaTratamientosComponent } from './Componentes/Administrador/lista-tratamientos/lista-tratamientos.component';
import { InicioComponent } from './Componentes/Usuario/inicio/inicio.component';
import { NosotrosComponent } from './Componentes/Usuario/nosotros/nosotros.component';
import { NavBarComponent } from './Componentes/Usuario/NavBar/NavBar.component';
import { InicioAdminComponent } from './Componentes/Administrador/inicio-admin/inicio-admin.component';
//Navbar - Footer
import { FooterComponent } from './Componentes/Usuario/Footer/Footer.component';
import { NavbarPrincipalComponent } from './Componentes/Navbar/navbar-principal/navbar-principal.component';
import { NavbarOwnerComponent } from './Componentes/Navbar/navbar-owner/navbar-owner.component';
import { NavbarDoctorComponent } from './Componentes/Navbar/navbar-doctor/navbar-doctor.component';
import { NavbarAdministradorComponent } from './Componentes/Navbar/navbar-administrador/navbar-administrador.component';
//owner
import { InicioOwnerComponent } from './Componentes/Usuario/inicio-owner/inicio-owner.component';
import { RecursosEducativosOwnerComponent } from './Componentes/Usuario/recursos-educativos-owner/recursos-educativos-owner.component';
//Doctor
import { ListaTratamientosDoctorComponent } from './Componentes/Administrador/lista-tratamientos-doctor/lista-tratamientos-doctor.component';
import { ListaCirugiasDoctorComponent } from './Componentes/Administrador/lista-cirugias-doctor/lista-cirugias-doctor.component';
import { CitasAgendadasDoctorComponent } from './Componentes/Administrador/citas-agendadas-doctor/citas-agendadas-doctor.component';
import { CirugiaFormularioDoctorComponent } from './Componentes/Administrador/cirugia-formulario-doctor/cirugia-formulario-doctor.component';
import { AgendaCitaDoctorComponent } from './Componentes/Administrador/agenda-cita-doctor/agenda-cita-doctor.component';
import { TratamientoFormularioDoctorComponent } from './Componentes/Administrador/tratamiento-formulario-doctor/tratamiento-formulario-doctor.component';
//Mapa
import { MapaComponent } from './Componentes/GIS/mapa/mapa.component';
import { CrearPersonaComponent } from './Componentes/Administrador/crear-persona-component/crear-persona-component.component';
import { UnauthorizedPageComponent } from './Componentes/unauthorized-page/unauthorized-page.component';

/*
// Componentes EF
import { PresentacionComponent } from './FinalTecWeb/Presentacion/Presentacion.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';*/
const routes: Routes = [
  //Publicos
  { path: "" , component: InicioComponent},
  { path: "nosotros" , component: NosotrosComponent},
  { path: "app-navbar" , component:  NavBarComponent},
  { path: "app-footer" , component: FooterComponent },
  { path: "app-navbar-principal" , component: NavbarPrincipalComponent },
  { path: "educativos-owner" , component: RecursosEducativosOwnerComponent },
  { path: "app-mapa" , component: MapaComponent },
  { path: "educativo", component: RecursosEducativosComponent},
  { path: 'mascota-formulario' , component: MascotaFormularioComponent },
  { path: "adopciones", component: AdopcionesComponent},
  { path: "unauthorized" , component: UnauthorizedPageComponent },
  //Con roles
  { path: "registro", component: ListasRegistrosComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdmin()]
},
  { path: "agregar_registro", component: AgregarRegistroComponent
},
  { path: 'actualizar_registro', component: ActualizarRegistroComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdmin()]
},
  { path: "citas", component: ReservaCitaComponent },
  { path: "citas-agendadas", component: ListaCitasComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctorEnfermero()]
},
  { path: "lista-mascotas", component: ListaMascotasComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctorEnfermero()]
},

  { path: "tratamiento-formulario" , component: TratamientoFormularioComponent,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctor()]
},
  { path: "cirugia-formulario" , component: CirugiaFormularioComponent,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctor()]
},
  { path: "lista-cirugia" , component: ListaCirugiasComponent,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctorEnfermero()]
},
  { path: "lista-tratamientos" , component: ListaTratamientosComponent,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctorEnfermero()]
},

  { path: "lista-tratamientos-doctor" , component: ListaTratamientosDoctorComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctorEnfermero()]
},
  { path: "lista-cirugias-doctor" , component: ListaCirugiasDoctorComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctor()]
},
  { path: "citas-agendadas-doctor" , component: CitasAgendadasDoctorComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctor()]
},
  { path: "cirugia-formulario-doctor" , component: CirugiaFormularioDoctorComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctor()]
},
  { path: "agenda-cita-doctor" , component: AgendaCitaDoctorComponent,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctor()]
},
  { path: "crear-persona" , component: CrearPersonaComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctorEnfermero()]
},
  { path: "tratamiento-formulario-doctor" , component: TratamientoFormularioDoctorComponent ,
  canActivate: [() => inject(AuthGuardFunctions).canActivateAdminDoctor()]
},
    //Revisar este path revision
    { path: "revision" , component: FormRevisionComponent},
    //OBSOLETOS
    { path: "estilista" , component: FormEstilistaComponent},
    { path: "inicio-administrador" , component: InicioAdminComponent },
    { path: "inicio-owner" , component: InicioOwnerComponent },
    { path: "app-navbar-owner" , component: NavbarOwnerComponent },
    { path: "app-navbar-doctor" , component: NavbarDoctorComponent },
    { path: "app-navbar-administrador" , component: NavbarAdministradorComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

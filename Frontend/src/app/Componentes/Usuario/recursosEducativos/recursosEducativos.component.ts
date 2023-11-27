import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursosEducativos',
  templateUrl: './recursosEducativos.component.html',
  styleUrls: ['./recursosEducativos.component.css']
})
export class RecursosEducativosComponent implements OnInit {
  longTextEsterilizacion = `Varios estados y condados han establecido programas de esterilización/castración a bajo costo que hacen que la cirugía sea costeable y accesible.`;
  longTextCuidados = `Estudios demuestran que las personas que cuidan de sus mascotas también podrían ser más saludables, a razón que al sacarlos a caminar o correr y también jugar activamente con ellos se hace ejercicio teniendo un impacto positivo en su cuerpo y mente.`;

  constructor() { }

  ngOnInit() {
  }

}

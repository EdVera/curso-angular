import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <button (click)=" acumular(base) "> +{{ base }} </button>

    <span> {{ numero }} </span>

    <button (click)=" acumular(- base) "> -{{ base }} </button>

    <h3>La base es: <b> {{ base }} </b></h3>

  `
})

export class ContadorComponent {
  titulo = 'Contador APP';
  numero = 10;
  base = 5;

  acumular( valor: number ): void {
    this.numero += valor;
  }
}

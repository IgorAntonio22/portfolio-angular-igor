import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicioan2',
  templateUrl: './exercicioan2.component.html',
  styleUrls: ['./exercicioan2.component.css']
})
export class Exercicioan2Component {

title = 'exercicio2AN';
valor: number = 0


aumentarValor(event:any): void {
  this.valor += 1
}

diminuirValor(event:any): void {
  this.valor -= 1

  if(this.valor < 0) {
    this.valor = 0
  }
}

}

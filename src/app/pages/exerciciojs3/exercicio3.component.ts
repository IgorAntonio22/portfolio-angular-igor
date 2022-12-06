import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

var elemento:any = document.getElementById('js')

let x = prompt('Digite o valor da variável X')
let y = prompt('Digite o valor da variável Y')

let z = x

x = y
y = z

elemento.style.fontSize = "30px";
elemento.innerHTML = (`Valor de X = ${x} e o valor de Y = ${y}, Valor de X = ${x} e o valor de Y = ${y}`)

}

}

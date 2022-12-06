import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var elemento :any = document.getElementById("js");


var comprimento1:any = 0
var comprimento2:any = 0
var comprimento3:any = 0

while (comprimento1 == null || comprimento1 <= 0) {
    comprimento1 = prompt('Digite aqui o primeiro comprimento: ', '')
}

while (comprimento2 == null || comprimento2 <= 0) {
    comprimento2 = prompt('Digite aqui o segundo comprimento: ', '')
}

while (comprimento3 == null || comprimento3 <= 0) {
    comprimento3 = prompt('Digite aqui o terceiro comprimento: ', '')
}

var ehEquilatero = comprimento1 == comprimento2 && comprimento3 == comprimento2
var ehEscaleno = comprimento1 !== comprimento2 && comprimento1 !== comprimento3 && comprimento3 != comprimento2

function messageMaker (ehEquilatero:any, ehEscaleno:any) {
    if (ehEquilatero) {
        return 'O seu triangulo é Equilátero!!!'
    } else if (ehEscaleno) {
        return'O seu triangulo é Escaleno!!!'
    } else {
        return'O seu triangulo é Isóceles!!!'
    }
}

elemento.style.fontSize = "50px";
elemento.innerHTML = messageMaker(ehEquilatero,ehEscaleno)
console.log(messageMaker(ehEquilatero, ehEscaleno))

  }

}

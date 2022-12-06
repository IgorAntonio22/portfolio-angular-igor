import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var elemento:any = document.getElementById('js')

var n1:any = null
var n2:any = null
var n3:any = null
var maior = 0

while (n1 == null) {
    n1 = prompt('Digite aqui o primeiro número: ')
}

while (n2 == null) {
    n2 = prompt('Digite aqui o segundo número: ')
}

while (n3 == null) {
    n3 = prompt('Digite aqui o terceiro número: ')
}

maior = n1

if (maior < n2) {
    maior = n2
}

if (maior < n3) {
    maior = n3
}

elemento.style.fontSize = "50px";
elemento.innerHTML = ('O seu maior número inteiro é: ' + maior)


}

}

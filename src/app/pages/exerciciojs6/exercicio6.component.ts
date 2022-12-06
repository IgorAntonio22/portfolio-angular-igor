import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

var elemento:any = document.getElementById('js')

var valor_do_binary:any

class Binario {
    constructor(valor_do_binario:any) {
        valor_do_binary = '' + valor_do_binario
    }

    passaPraDecimal() {
        var decimal = 0
        for (var i = 0; i < valor_do_binary.length; i++) {
            decimal += Math.pow(2, i) * parseInt(valor_do_binary.charAt(valor_do_binary.length - 1 - i))
        }
        return decimal
    }
}

var num

num = new Binario(prompt('Escreva seu número binário:'))

elemento.style.fontSize = "30px";
elemento.innerHTML = (`Conversão: ${num.passaPraDecimal()}`)

}

}

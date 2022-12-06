import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})
export class Exercicio7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

var elemento:any = document.getElementById('js')

var n_usuario:any = prompt('Digite aqui o número de usuarios')
var n_usuarios = parseInt(n_usuario)

var usuarios:any = []

for (let a = 0; a < n_usuarios; a++) {

    var usuario:any = {

        nome:'',
        idade:'',
        cpf:'',
        genero:'',
    }

    usuario.nome= prompt('Digite aqui o seu nome: ')
    usuario.idade = prompt('Digite aqui a sua idade: ')
    usuario.cpf = prompt('Digite aqui seu cpf: ')
    usuario.genero = prompt('Digite aqui o seu gênero')

    usuarios.push(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, CPF: ${usuario.cpf}, Gênero:
      ${usuario.genero} <br><br>`)
    console.log(usuarios)    
}

const myString = usuarios.join(" ")
elemento.style.fontSize = "30px";
elemento.innerHTML = (`${myString}`)

}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  var elemento:any = document.getElementById('js')

  var nome:any = []
  var promp:any = prompt('Digite aqui seu texto')
  var promp2 = promp.split('')
  
  console.log(promp.toLocaleUpperCase())
  console.log(promp.toLowerCase())

  elemento.style.fontSize = "25px";
  elemento.innerHTML = (`Maiúsculo:${promp.toLocaleUpperCase()},<br> Minúsculo:${promp.toLowerCase()}, <br>Letra por letra: <br>${promp2}`)
  
  }

}
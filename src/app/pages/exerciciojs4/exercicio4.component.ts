import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var elemento:any = document.getElementById('js')

    var x:any = prompt('Quantos números você deseja?','');
    var n_numerosc = parseFloat(x)

    
    var array:Array<number> = []
    
    for (let a = 1; a <= n_numerosc; a++) {
        let numero:any = prompt(`Digite aqui o ${a}º número`)
        let numero2 = parseFloat(numero)
        array.push(numero2)
    }
    
    console.log('array = '+array)
    
    let soma = 0
    let media
    
    for (let valor of array) {
        soma = soma + valor
    }
    
    media = soma / array.length
    
    console.log('soma = '+soma)
    console.log('media = '+media)
    
    console.log('Calculando Potencia de 2!')
    
    var potenciade2
    
    array.forEach(function(element:any, index:any, array:any){
        console.log()
        potenciade2 = Math.pow(element,2);
        console.log(element+' * '+element+' = '+potenciade2)
    });
    
    console.log('Calculando Raizes!')
    
    var quadrada
    var sqrt
    array.forEach(function(element:any, index:any, array:any){
        sqrt = Math.sqrt(element); 
        console.log('raiz quadrada de '+element+' = '+sqrt);       
    });
    
    var cubica
    array.forEach(function(element:any, index:any, array:any){
        cubica = Math.cbrt(element); 
        console.log('raiz cúbica de '+element+' = '+cubica);                   
    });
    
    elemento.style.fontSize = "25px";
    elemento.innerHTML = (`soma = ${soma}, média = ${media}, potência de 2 do último número declarado = 
    ${potenciade2}, raíz quadrada do último número declarado = ${sqrt
    }, raíz cúbica do último número declarado = ${cubica}`)

  }

}

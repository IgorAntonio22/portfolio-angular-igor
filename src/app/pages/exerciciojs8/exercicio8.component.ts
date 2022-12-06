import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  templateUrl: './exercicio8.component.html',
  styleUrls: ['./exercicio8.component.css']
})
export class Exercicio8Component implements OnInit, AfterViewInit  {

  constructor() {

   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void { 
    
  const btnToggle:any = document.querySelector<any>('.toggle')

  btnToggle.addEventListener('click', function() {
  let lampada2:any = document.querySelector<any>('.lampada2')
  let lampada1:any = document.querySelector<any>('.lampada1')
  let body:any = document.querySelector<any>('.body')
  

  if (lampada2.classList.contains('acender')) {
  lampada2.classList.remove('acender')            
  } else {
  lampada2.classList.add('acender')
  }

  if (lampada2.classList.contains('acender')) {
  lampada1.classList.add('remover')    
  } else {
  lampada1.classList.remove('remover')
  }

  if (lampada2.classList.contains('acender')) {
  body.classList.add('fundo2')
  } else {
  body.classList.remove('fundo2')
  }
})

}

}

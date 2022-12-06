import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(public translate: TranslateService ) {  translate.addLangs(['PT-BR', 'EN']);
  translate.setDefaultLang('PT-BR')
}
  switchLanguage(lang: string) {
  this.translate.use(lang)
  
}


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(public translate: TranslateService) { 

       
    translate.addLangs(['PT-BR', 'EN']);
    translate.setDefaultLang('PT-BR')
  }
    switchLanguage(lang: string) {
    this.translate.use(lang)
    
  }
  

  ngOnInit(): void {
  }

}

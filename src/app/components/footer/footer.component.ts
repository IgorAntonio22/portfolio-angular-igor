import { Component, OnInit } from '@angular/core';
import { faAngular, faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Angular = faAngular;
  Html = faHtml5
  Css = faCss3
  Javascript = faJs

  constructor() { }

  ngOnInit(): void {
  }

}

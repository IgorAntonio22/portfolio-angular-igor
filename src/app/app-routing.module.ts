import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ExerciciosJSComponent } from './pages/exercicios-js/exercicios-js.component';
import { Exercicio1Component } from './pages/exerciciojs1/exercicio1.component';
import { Exercicio2Component } from './pages/exerciciojs2/exercicio2.component';
import { Exercicio3Component } from './pages/exerciciojs3/exercicio3.component';
import { Exercicio4Component } from './pages/exerciciojs4/exercicio4.component';
import { Exercicio5Component } from './pages/exerciciojs5/exercicio5.component';
import { Exercicio6Component } from './pages/exerciciojs6/exercicio6.component';
import { Exercicio7Component } from './pages/exerciciojs7/exercicio7.component';
import { Exercicio8Component } from './pages/exerciciojs8/exercicio8.component';
import { ExerciciosANComponent } from './pages/exercicios-an/exercicios-an.component';
import { Exercicioan1Component } from './pages/exercicioan1/exercicioan1.component';
import { Exercicioan2Component } from './pages/exercicioan2/exercicioan2.component';
import { Exercicioan3Component } from './pages/exercicioan3/exercicioan3.component';
import { Exercicioan4Component } from './pages/exercicioan4/exercicioan4.component';
import { Exercicioan5Component } from './pages/exercicioan5/exercicioan5.component';
import { Exercicioan6Component } from './pages/exercicioan6/exercicioan6.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { Projeto01Component } from './pages/projeto01/projeto01.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'portfolio', component: PortfolioComponent },
  { path:'contato', component: ContatoComponent },
  { path:'projetos', component: ProjetosComponent },
  { path:'exerciciosJS', component: ExerciciosJSComponent},
  { path:'exerciciosAN', component: ExerciciosANComponent},
  { path:'exerciciosJS/exercicio1', component: Exercicio1Component},
  { path:'exerciciosJS/exercicio2', component: Exercicio2Component},
  { path:'exerciciosJS/exercicio3', component: Exercicio3Component},
  { path:'exerciciosJS/exercicio4', component: Exercicio4Component},
  { path:'exerciciosJS/exercicio5', component: Exercicio5Component},
  { path:'exerciciosJS/exercicio6', component: Exercicio6Component},
  { path:'exerciciosJS/exercicio7', component: Exercicio7Component},
  { path:'exerciciosJS/exercicio8', component: Exercicio8Component},
  { path:'exerciciosAN/exercicio1', component: Exercicioan1Component},
  { path:'exerciciosAN/exercicio2', component: Exercicioan2Component},
  { path:'exerciciosAN/exercicio3', component: Exercicioan3Component},
  { path:'exerciciosAN/exercicio4', component: Exercicioan4Component},
  { path:'exerciciosAN/exercicio5', component: Exercicioan5Component},
  { path:'exerciciosAN/exercicio6', component: Exercicioan6Component},
  { path:'projetos/projeto1', component: Projeto01Component}
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GhHomeComponent } from './components/componentes-exAN-05/gh-home/gh-home.component';
import { GhDialogComponent } from './components/componentes-exAN-05/gh-dialog/gh-dialog.component';
import { MaterialModule } from './material/material.module';
import { ChDialogComponent } from './components/componentes-exAN-06/ch-dialog/ch-dialog.component';
import { ChHomeComponent } from './components/componentes-exAN-06/ch-home/ch-home.component';
import { HttpClientModule } from '@angular/common/http';
import { GhApiProjeto01Service } from './components/componentes-projeto-01/services/gh-api-projeto01.service';
import { GhDialogProjeto01Component } from './components/componentes-projeto-01/gh-users-projeto01/gh-dialog-projeto01/gh-dialog-projeto01.component';





@NgModule({
  declarations: [
    GhHomeComponent,
    GhDialogComponent,
    ChDialogComponent,
    ChHomeComponent,
    GhDialogProjeto01Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    GhHomeComponent
  ],
  providers: [
    GhApiProjeto01Service
  ]
})
export class GhUsersModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CrudDisciplinaComponent } from './crud-disciplina/crud-disciplina.component';

import { HttpModule } from '@angular/http';
import { DisciplinaService } from './disciplina.service';


@NgModule({
  declarations: [
    AppComponent,
    CrudDisciplinaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [DisciplinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

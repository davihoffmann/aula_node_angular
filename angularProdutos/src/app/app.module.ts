import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosService } from './produtos.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

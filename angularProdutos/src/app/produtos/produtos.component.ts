import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  lista = [];
  colecao:String;

  constructor(public produtoService:ProdutosService) {}

  private t = 0;
  

  ngOnInit() {
    //this.colecao = this.produtoService.colecao;
    this.atualiza();

   setInterval(()=>this.t++,1000);
  }

  atualiza() {
    this.produtoService.getAll().then(dados => {
      this.lista = dados;
    })
  }
  

}
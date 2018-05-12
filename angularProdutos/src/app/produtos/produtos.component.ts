import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  nome = "";
  lista = [];
  colecao:String;

  constructor(public produtoService:ProdutosService) {}


  ngOnInit() {
    this.buscaProdutos();
  }

  buscaProdutos(){
    this.produtoService.consulta().then(
      produtos => {
        this.lista = produtos;
      }
    );
  }

  inserir() {
    this.produtoService.inserir(this.nome)
    .then(()=>{
      this.nome="";
      this.buscaProdutos();
    });
  }

}
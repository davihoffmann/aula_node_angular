import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora',
  template: `
  <p>
    {{t}}
  </p>
  `,
  styleUrls: ['./hora.component.css']
})
export class HoraComponent implements OnInit {

  constructor() {
  }

  private t = 0;
  

  atualiza(){
    this.t++;
  } 

  ngOnInit() {
      

   setInterval(()=>this.t++,1000);
  }

}
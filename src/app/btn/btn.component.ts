import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  ItensLista = [""];
  Lista="";
  
  @Output()
  AdicionarLista(): void{
    this.ItensLista.push(this.Lista);
    this.Lista = ""
  }
 

  RemoverLista(Itens:string){
    this.ItensLista.splice(this.ItensLista.indexOf(Itens),1)

  }
  
  Clear(Itens:string){
    this.ItensLista.splice(this.Lista.length)
  }


}



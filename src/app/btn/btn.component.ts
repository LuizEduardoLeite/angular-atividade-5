import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  ItensLista = [""];
  Lista="";
  
  
  AdicionarLista(): void{
    this.ItensLista.push(this.Lista);
    this.Lista = ""
  }
 
  Storage(){
    
    localStorage.setItem('ItensLista', JSON.stringify(this.ItensLista))
    let Stor = localStorage.getItem('Lista')
    console.log('Local Storage:'+Stor)
  }

  
  @Output()
  clicou2:EventEmitter<any> = new EventEmitter<any>()
  Clear(){
    this.ItensLista.splice(this.Lista.length)
    this.clicou2.emit()
  }
  @Output()
  clicou1:EventEmitter<string> = new EventEmitter<string>()
  RemoverLista(Itens:string){
      this.ItensLista.splice(this.ItensLista.indexOf(Itens),1)
      this.clicou1.emit()
    }
  }




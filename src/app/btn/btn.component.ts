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

    localStorage.setItem('ItensLista', JSON.stringify(this.ItensLista))
    let Stor = localStorage.getItem('Lista')
    
    let storage1 = localStorage.getItem('ItensLista')
    let arr1 = JSON.parse(storage1 || '[]')
    this.ItensLista = arr1    
  }
  recuperarstorage():void{
    let storage1 = localStorage.getItem('ItensLista')
    let arr1 = JSON.parse(storage1 || '')
    this.ItensLista = arr1
  }
  @Output()
  clicou2:EventEmitter<any> = new EventEmitter<any>()
  Clear(){
    this.ItensLista.splice(this.Lista.length)
    
    this.ItensLista.splice(this.ItensLista.length)
      let arr1 = JSON.stringify(this.ItensLista)
      localStorage.setItem('ItensLista',arr1)
    
    this.clicou2.emit()
  }
  @Output()
  clicou1:EventEmitter<string> = new EventEmitter<string>()
  RemoverLista(Itens:string){
      this.ItensLista.splice(this.ItensLista.indexOf(Itens),1)
      
      this.ItensLista.splice(this.ItensLista.indexOf(Itens),1)
      let arr2 = JSON.stringify(this.ItensLista)
      localStorage.setItem('ItensLista',arr2)

      this.clicou1.emit()
    }
  }




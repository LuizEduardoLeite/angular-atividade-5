import { Component,} from '@angular/core';
import  { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
constructor(private snack:MatSnackBar){}
 

opSnack1() {
  this.snack.open('Voce apagou esta Tarefa','fechar');
}
opSnack2() {
  this.snack.open('Voce apagou todas as tarefas','fechar');
}
}



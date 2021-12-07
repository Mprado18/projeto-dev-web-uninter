import { Component } from '@angular/core';
import studentsData from './students'; // Carregamento dos alunos

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // estilos CSS
})

export class AppComponent {
  // Atributo para armazenar os alunos
  students = studentsData;
}

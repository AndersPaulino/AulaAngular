import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/model/livro.model';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {
  route = inject(ActivatedRoute);
  livro!: Livro;
  logData: any;

  constructor(){
      let id = this.route.snapshot.paramMap.get(`id`);

      if(id){
        this.logData = {autor: "Maria", titulo: "Titulo Atualizado"}
        console.log("Maria", "Titulo Atualizado");
      }else{
        this.logData = {autor:"Novo Autor", titulo: "Novo Titulo"}
        console.log("Novo Autor","Novo Titulo");
      }
  }
}

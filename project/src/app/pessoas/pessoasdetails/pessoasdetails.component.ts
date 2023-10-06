import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa.model';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {
 route = inject(ActivatedRoute);
 logData: any;
 
 pessoa: Pessoa = new Pessoa("",0); 

 @Output() retorno = new EventEmitter<Pessoa>();

 constructor(){
    let id = this.route.snapshot.paramMap.get(`id`);

    if(id){
      this.logData = {nome: "Maria", idade: 45}
      console.log("Maria", 45);
    }else{
      this.logData = {nome:"Novo Nome", idade: 0}
      console.log("Novo Nome",0);
    }
 }
 salvar(){
  this.retorno.emit(this.pessoa);
 }
}

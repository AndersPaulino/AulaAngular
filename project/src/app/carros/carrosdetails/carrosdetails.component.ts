import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/model/carro.model';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {
  route = inject(ActivatedRoute);
  carro: Carro = new Carro("",0);
  logData: any;

  @Output() retorno = new EventEmitter<Carro>();

  constructor(){
    let id = this.route.snapshot.paramMap.get(`id`);

    if(id){
      this.logData = {nome: "Celta", ano: 2010}
      console.log("Celta", 2010);
    }else{
      this.logData = {nome: "Novo Carro", ano: 2024}
      console.log("Novo Carro",2024);
    }
  }
  salvar(){
    this.retorno.emit(this.carro);
   }
}

import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/model/livro.model';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {
  route = inject(ActivatedRoute);
  livro: Livro = new Livro("","");
  logData: any;

  @Output() retorno = new EventEmitter<Livro>();

  salvar(){
    this.retorno.emit(this.livro);
   }
}

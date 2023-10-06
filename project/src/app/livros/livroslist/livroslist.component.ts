import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Livro } from 'src/app/model/livro.model';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  modalSerice = inject(NgbModal);

  livro: Livro [];

  constructor(){
    this.livro = [
      new Livro("Anderson","Teste 01"),
      new Livro("Anderson","Teste 02"),
      new Livro("Anderson","Teste 03")
    ]
  }

  abrirModalLivro(content: any) {
    this.modalSerice.open(content, { size: 'lg' });
  }

  addNaLista(livro: Livro){
    this.livro.push(livro);
    this.modalSerice.dismissAll();
  }
}

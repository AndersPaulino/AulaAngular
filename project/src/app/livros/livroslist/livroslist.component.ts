import { Component } from '@angular/core';

import { Livro } from 'src/app/model/livro.model';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  livro: Livro [];

  constructor(){
    this.livro = [
      new Livro("Anderson","Teste 01"),
      new Livro("Anderson","Teste 02"),
      new Livro("Anderson","Teste 03")
    ]
  }

}

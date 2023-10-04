import { Component } from '@angular/core';

import { Pessoa } from '../../model/pessoa.model';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  pessoa: Pessoa[];

  constructor(){
    this.pessoa = [
      new Pessoa('Anderson', 32),
      new Pessoa('Andŕe', 32),
      new Pessoa('Silvio', 25),
      new Pessoa('Evellyn', 20),
      new Pessoa('Diego', 45),
      new Pessoa('Diogo', 25),
      new Pessoa('Rafael', 25),
      new Pessoa('Eduardo', 25),
      new Pessoa('Sabrina', 25),
      new Pessoa('Ana', 25),
    ];
  }
}

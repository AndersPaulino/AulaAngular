import { Component, inject } from '@angular/core';
//import { NgModel } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Pessoa } from 'src/app/model/pessoa.model';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  modalService = inject(NgModel);

  pessoa: Pessoa[];

  exibirIdade: 'todas' | 'menor' | 'maior' = 'todas';

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
  alterarCondicaoExibicao(condicao: 'todas' | 'menor' | 'maior'): void {
    this.exibirIdade = condicao;
  }

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
}

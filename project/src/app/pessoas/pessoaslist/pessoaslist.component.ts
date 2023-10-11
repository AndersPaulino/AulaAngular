import { Input } from '@angular/core';
import { Component, inject} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/model/pessoa.model';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  modalService = inject(NgbModal);

  pessoa: Pessoa[] = [];

  exibirIdade: 'todas' | 'menor' | 'maior' = 'todas';

  constructor(){
  }
  alterarCondicaoExibicao(condicao: 'todas' | 'menor' | 'maior'): void {
    this.exibirIdade = condicao;
  }

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  addNaLista(pessoa: Pessoa){
    pessoa.id=this.pessoa.length+1;
    this.pessoa.push(pessoa);
    this.modalService.dismissAll();
  }
  addNaListaEditar(pessoa: Pessoa) {
    const index = this.pessoa.findIndex(p => p.id === pessoa.id);

    if (index !== -1) {
      this.pessoa[index] = pessoa;
      this.modalService.dismissAll();
    } else {
      this.pessoa.push(pessoa);
      this.modalService.dismissAll();
    }
  }
  
}

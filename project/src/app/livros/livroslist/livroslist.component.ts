import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  modalSerice = inject(NgbModal);

  livroSelecionadoParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;

  livro: Livro [] = [];

  livroService = inject(LivroService);

  constructor(){
    this.listAll();
  }

  listAll() {

    this.livroService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.livro = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  exemploErro() {

    this.livroService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.livro = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });

  }
  abrirModalLivro(content: any) {
    this.modalSerice.open(content, { size: 'lg' });
  }

  abrirModalEditar(content: any, livro: Livro) {
    this.livroSelecionadoParaEdicao = Object.assign({},livro);

    this.modalSerice.open(content, { size: 'lg' });
  }

  atualizarLista(mensagem: string){
    alert(mensagem);
    this.modalSerice.dismissAll();
    this.listAll();
  }

  deletar(id: number) {
    this.livroService.delete(id).subscribe(() => this.listAll());
    alert("Deletado com sucesso!");
    this.listAll();
  }
}

import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {
  route = inject(ActivatedRoute);
  logData: any;

  @Input() livro: Livro = new Livro();

  @Output() retorno = new EventEmitter<string>();

  livroService = inject(LivroService);

  salvar() {
    if (this.livro.id > 0) {
      this.livroService.update(this.livro.id, this.livro).subscribe({
        next: livro => { // QUANDO DÁ CERTO
          this.retorno.emit("Alterado com sucesso!");
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.livroService.save(this.livro).subscribe({
        next: livro => { // QUANDO DÁ CERTO
          this.retorno.emit("Salvo com sucesso!");
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
  
}

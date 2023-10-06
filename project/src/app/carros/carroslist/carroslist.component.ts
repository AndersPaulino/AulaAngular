import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Carro } from 'src/app/model/carro.model';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  modalSerivce = inject(NgbModal);

  carro: Carro [];

  constructor(){
    this.carro = [
      new Carro('Focus', 1997),
      new Carro('Gol', 1995),
      new Carro('Sandero', 2008),
      new Carro('Parati', 1995),
    ]
  }
  abrirModalCarro(content: any) {
    this.modalSerivce.open(content, { size: 'lg' });
  }

  addNaLista(carro: Carro){
    this.carro.push(carro);
    this.modalSerivce.dismissAll();
  }
}

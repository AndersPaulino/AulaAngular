import { Component } from '@angular/core';

import { Carro } from 'src/app/model/carro.model';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  carro: Carro [];

  constructor(){
    this.carro = [
      new Carro('Focus', 1997),
      new Carro('Gol', 1995),
      new Carro('Sandero', 2008),
      new Carro('Parati', 1995),
    ]
  }
}

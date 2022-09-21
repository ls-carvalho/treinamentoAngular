import { OportunidadeService } from './../service/oportunidade.service';
import { Component, OnInit } from '@angular/core';
import { OportunidadesCard } from '../model/oportunidades-card';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.scss'],
})
export class OportunidadesComponent implements OnInit {
  cards: OportunidadesCard[] = [];
  constructor(private oportunidadeService: OportunidadeService) {}

  ngOnInit(): void {
    this.oportunidadeService
      .getCards()
      .subscribe((result) => (this.cards = result));
  }
}

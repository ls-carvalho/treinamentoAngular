import { Component, Input, OnInit } from '@angular/core';
import { OportunidadesCard } from '../model/oportunidades-card';

@Component({
  selector: 'app-oportunidades-card',
  templateUrl: './oportunidades-card.component.html',
  styleUrls: ['./oportunidades-card.component.scss'],
})
export class OportunidadesCardComponent implements OnInit {
  @Input() card: OportunidadesCard = {};
  constructor() {}

  ngOnInit(): void {}
}

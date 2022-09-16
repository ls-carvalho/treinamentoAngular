import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pagina: number = 0;
  @Output() trocarPagina: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  mudarPagina(novaPagina: number) {
    this.pagina = novaPagina;
    this.trocarPagina.emit(novaPagina);
  }
}

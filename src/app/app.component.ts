import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'treinamento-angular';
  pagina: number = 0;

  mudarPagina(novaPagina: number) {
    this.pagina = novaPagina;
  }
}

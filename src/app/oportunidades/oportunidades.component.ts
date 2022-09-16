import { Component, OnInit } from '@angular/core';
import { OportunidadesCard } from '../model/oportunidades-card';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.scss'],
})
export class OportunidadesComponent implements OnInit {
  cards: OportunidadesCard[] = [
    {
      titulo: 'Desenvolvedor Java',
      descricao: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
      praesentium nemo eaque doloremque quaerat, sunt consectetur facilis
      quisquam unde repudiandae vel quia fuga, dicta sed? Magni dolorum
      numquam tempora quisquam.`,
      imagem:
        '../../assets/images/professional-programmer-working-late-in-the-dark-office.png',
    },
    {
      titulo: 'Desenvolvedor Java',
      descricao: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
      praesentium nemo eaque doloremque quaerat, sunt consectetur facilis
      quisquam unde repudiandae vel quia fuga, dicta sed? Magni dolorum
      numquam tempora quisquam.`,
      imagem:
        '../../assets/images/professional-programmer-working-late-in-the-dark-office.png',
    },
    {
      titulo: 'Desenvolvedor Java',
      descricao: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
      praesentium nemo eaque doloremque quaerat, sunt consectetur facilis
      quisquam unde repudiandae vel quia fuga, dicta sed? Magni dolorum
      numquam tempora quisquam.`,
      imagem:
        '../../assets/images/professional-programmer-working-late-in-the-dark-office.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

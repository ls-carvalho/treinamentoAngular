import { Component, OnInit } from '@angular/core';
import { BlogCard } from '../model/blog-card';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  cards: BlogCard[] = [
    {
      titulo: 'Um título aleatório',
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
      aperiam iure, sapiente enim quidem nisi iusto, delectus illo, eum
      soluta explicabo libero voluptatibus earum tempora ad incidunt in
      non unde!`,
      imagem: '../../assets/images/Coffee Gifs 4.gif',
      alt: 'Café',
      data: '30 de ago.',
      link: '#',
    },
    {
      titulo: 'Outro título aleatório',
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
      aperiam iure, sapiente enim quidem nisi iusto, delectus illo, eum
      soluta explicabo libero voluptatibus earum tempora ad incidunt in
      non unde!`,
      imagem: '../../assets/images/OIP.jpg',
      alt: 'Programador',
      data: '30 de ago.',
      link: '#',
    },
    {
      titulo: 'Mais um título aleatório',
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
      aperiam iure, sapiente enim quidem nisi iusto, delectus illo, eum
      soluta explicabo libero voluptatibus earum tempora ad incidunt in
      non unde!`,
      imagem: '../../assets/images/R.gif',
      alt: 'Erro!',
      data: '30 de ago.',
      link: '#',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

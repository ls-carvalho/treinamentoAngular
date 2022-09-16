import { Component, Input, OnInit } from '@angular/core';
import { BlogCard } from '../model/blog-card';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input() card: BlogCard = {};
  constructor() {}

  ngOnInit(): void {}
}

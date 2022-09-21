import { BlogService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';
import { BlogCard } from '../model/blog-card';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  cards: BlogCard[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getCards().subscribe((result) => (this.cards = result));
  }
}

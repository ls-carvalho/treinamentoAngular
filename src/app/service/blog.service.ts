import { baseUrl } from './../../environments/environment';
import { BlogCard } from './../model/blog-card';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http.get<BlogCard[]>(baseUrl + 'blog-mock.json');
  }
}

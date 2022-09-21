import { baseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OportunidadesCard } from '../model/oportunidades-card';

@Injectable({
  providedIn: 'root',
})
export class OportunidadeService {
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http.get<OportunidadesCard[]>(
      baseUrl + 'oportunidade-mock.json'
    );
  }
}

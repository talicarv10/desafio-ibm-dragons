import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dragoes } from '../model/dragoes.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/';

  getDragoes(): Observable<Dragoes[]> {
    return this.http.get<Dragoes[]>(this.apiUrl);
  }

  getDragaoById(id: number): Observable<Dragoes> {
    return this.http.get<Dragoes>(this.apiUrl + id);
  }

  createDragao(dragao: Dragoes): Observable<Dragoes> {
    return this.http.post<Dragoes>(this.apiUrl, dragao);
  }

  updateDragao(dragao: any): Observable<Dragoes> {
    return this.http.put<Dragoes>(this.apiUrl + dragao.id, dragao);
  }

  deleteDragao(id: string): Observable<Dragoes> {
    return this.http.delete<Dragoes>(this.apiUrl + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mercaderiaItem } from './mercaderia.interface';

@Injectable({
  providedIn: 'root',
})
export class mercaderiaService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<mercaderiaItem[]> {
    return this.httpClient.get<mercaderiaItem[]>('mercaderia');
  }
}

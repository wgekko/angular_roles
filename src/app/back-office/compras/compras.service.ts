import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './compras.interface';

@Injectable({
  providedIn: 'root',
})
export class comprasService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('compras');
  }
}

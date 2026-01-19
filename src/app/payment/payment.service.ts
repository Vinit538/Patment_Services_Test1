import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private API = 'http://localhost:8080/api/payments';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
  create(data: any) {
    return this.http.post(this.API, data);
  }
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  save(payment: any): Observable<any> {
    return this.http.post(this.API, payment);
  }

  update(id: number, payment: any): Observable<any> {
    return this.http.put(`${this.API}/${id}`, payment);
  }
}

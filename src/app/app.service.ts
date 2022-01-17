import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getDeals(): Observable<any> {
   return this.httpClient.get('http://localhost:3000/deals');
  }
}

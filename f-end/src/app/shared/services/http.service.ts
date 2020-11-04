import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SendingData } from './../interfaces/sending-data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<object> {
    return this.http.get('http://localhost:3000/api/data/get');
  }

  public send(data: SendingData, email: string): Observable<object> {
    return this.http.post(`http://localhost:3000/api/data/send${email}`, data);
  }
}

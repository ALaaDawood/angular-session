import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgeServiceService {

  constructor(private httpClient: HttpClient) { }

  get(name: string): Observable<any> {
    const httpParam = new HttpParams().append('name', name);
    return this.httpClient.get('https://api.agify.io/', { params: httpParam });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data-model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Data>{
    return this.http.get<Data>(API);
  }
}

const API = "https://api.publicapis.org/categories";
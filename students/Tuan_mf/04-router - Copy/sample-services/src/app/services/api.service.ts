import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  post(url: string, data: any) {
    return this.http.post(url, data).toPromise()
  }
}

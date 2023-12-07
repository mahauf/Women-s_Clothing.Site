import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4000'
  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<any>(`${this.apiUrl}/product`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMain } from '../interfaces/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }

  getData(title: string): Observable<IMain[]> {
    return this.http.get<IMain[]>(`${this.url}${title}`)
  }

  getDataById(title: string, id: number): Observable<IMain> {
    return this.http.get<IMain>(`${this.url}${title}/${id}`)
  }

  addData(title: string, data: IMain): Observable<IMain> {
    return this.http.post<IMain>(`${this.url}${title}`, data)
  }

  updateData(title: string, data: IMain): Observable<IMain> {
    return this.http.put<IMain>(`${this.url}${title}`, data)
  }

  deleteData(title: string, id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${title}/${id}`)
  }


}

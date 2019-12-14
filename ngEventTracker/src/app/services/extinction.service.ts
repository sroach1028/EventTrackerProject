import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Extinction } from '../models/extinction';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ExtinctionService {

// F I E L D S

private baseUrl = 'http://localhost:8084/';
private url = this.baseUrl + 'api/extinctions/';

  constructor(private http: HttpClient) { }

  // M E T H O D S

  index(){
    return this.http.get<Extinction[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  create(ext: Extinction) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Extinction>(this.url, ext, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
    }

    destroy(id: number) {
      const httpOptions = {};
      return this.http.delete<any>(this.url + id, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
    }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class Data {
  name: string;
  lastName: string;
}

export class DataComp3{
  a: number;
  b: number;
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) { }

  send(url: string, data: Data): Observable<any> {
    return this.http.post(`/comm/${url}`, data).pipe(
      map((rst: any) => {
        console.log(rst);
        return {
          fullName: rst.fullName,
          name: data.name,
          lastName: data.lastName
        };
      }),
      map((rst: any) => {
        console.log(JSON.stringify(rst, null, '\t'));
        rst.last = true;
        return rst;
      })
    );
  }
  sendComp3(url: string, data: DataComp3): Observable<any> {
    return this.http.post(`/comm/${url}`, data).pipe(
      map((rst: any) => {
        console.log(rst);
        return {
          a: data.a,
          b: data.b,
          Suma: rst.sum
        };
      })
    );
  }
}

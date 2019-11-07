import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) {  }

  apiUrl = environment.apiUrl;

  public getPhonebook(): Observable<any> {
    let headers = this.createRequestHeader();
    return this.http.get(this.apiUrl + "/Phonebook?phonebook=Phonebook1" , { headers: headers });
  }
  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET" 
    });
    return headers;
  }
}

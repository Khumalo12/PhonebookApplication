import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {  }

  apiUrl = environment.apiUrl;

  public getContacts(phonebookId): Observable<any> {
    return this.http.get(this.apiUrl + "/Contact/Contacts?phonebookId=" + phonebookId);
  }

  public searchContacts(phonebookId, name): Observable<any> {
    return this.http.get(this.apiUrl + "/Contact/SearchContacts?phonebookId=" + phonebookId + "&name=" + name);
  }

  public createContact(data: any): Observable<any> {
    let headers = this.createRequestHeader();
    let body = this.createRequestBody(data.name, data.phonenumber);
    return this.http.post("../../assets/phonebook.json", body, {headers: headers})
  }

  private createRequestBody(name: string, phonenumber: string) {
    let body = { "Name": name, "PhoneNumber": phonenumber }
    return body;
  }

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return headers;
  }
}

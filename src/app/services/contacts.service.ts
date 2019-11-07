import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  public getContacts(phonebookId): Observable<any> {
    return this.http.get(this.apiUrl + "/Contact/Contacts?phonebookId=" + phonebookId);
  }

  public searchContacts(phonebookId, name): Observable<any> {
    return this.http.get(this.apiUrl + "/Contact/SearchContacts?phonebookId=" + phonebookId + "&name=" + name);
  }

  public createContact(name, phonenumber, id: any): Observable<any> {
    let headers = this.createRequestHeader();
    let body = this.createRequestBody(name, phonenumber, id);
    return this.http.post(this.apiUrl + "/Contact/CreateContacts", body, { headers: headers });
  }

  private createRequestBody(name: string, phonenumber: string, id: string) {
    let intId = parseInt(id);
    let body = { "name": name, "phonenumber": phonenumber, "phonebook_id": intId }
    return body;
  }

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}

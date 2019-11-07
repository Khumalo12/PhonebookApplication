import { Injectable } from "@angular/core";

@Injectable()
export class PhonebookStateService {
  private phonebookId:any;
  private datasource:any;
  private message:any
  
  public getPhonebook(): any {
    return this.phonebookId;
  }

  public setPhonebook(id) {
    this.phonebookId = id;
  }

  public getContactList(): any {
    return this.datasource;
  }

  public setContactList(data){
    this.datasource = data;
  }
}

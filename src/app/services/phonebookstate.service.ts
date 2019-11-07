import { Injectable } from "@angular/core";

@Injectable()
export class PhonebookStateService {
  public phonebookId:any;
  public datasource:any;
  
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

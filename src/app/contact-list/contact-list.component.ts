import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { PhonebookStateService } from '../services/phonebookstate.service';
import { PhonebookService } from '../services/phonebook.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactsService, PhonebookService]
})
export class ContactListComponent implements OnInit {

  columnsToDisplay: string[] = ['Name', 'Phone Number'];
  dataSource: any = [];

  constructor(private contactsService: ContactsService, public phonebookState: PhonebookStateService, private phonebookService: PhonebookService) { }

  ngOnInit() {
    let id;
    this.phonebookService.getPhonebook()
      .subscribe((result) => {
        this.phonebookState.setPhonebook(result.id);
        id = this.phonebookState.getPhonebook();
        this.contactsService.getContacts(id)
          .subscribe((result) => {
            this.phonebookState.setContactList(result);
            this.dataSource = this.phonebookState.getContactList();
          });
      });
  }
}
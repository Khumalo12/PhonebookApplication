import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { PhonebookStateService } from '../services/phonebookstate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css'],
  providers: [ContactsService]

})
export class ContactSearchComponent implements OnInit {

  columnsToDisplay: string[] = ['Name', 'Phone Number'];
  dataSource: any = [];
  searchvalue: any;

  constructor(private contactsService: ContactsService, public phonebookState: PhonebookStateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.searchvalue = params.searchvalue;
      let id = this.phonebookState.getPhonebook();
      this.contactsService.searchContacts(id, this.searchvalue)
        .subscribe((result) => {
          this.dataSource = result;
        });
    });
  }
}

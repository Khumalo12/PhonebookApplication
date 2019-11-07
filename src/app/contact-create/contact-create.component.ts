import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';
import { PhonebookStateService } from '../services/phonebookstate.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface Entry {
  name: string;
  phonenumber: string;
}

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css'],
  providers: [ContactsService]
})

export class ContactCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Entry, private contactsService: ContactsService, public phonebookState: PhonebookStateService, private router: Router, private route: ActivatedRoute) { }

  onCancelClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/contactlist']);
  }

  onSaveClick(): void {
    let id = this.phonebookState.getPhonebook();
    this.dialogRef.beforeClosed().subscribe(result => {
      if (result.name != undefined && result.phonenumber != undefined) {
        this.contactsService.createContact(result.name, result.phonenumber, id).subscribe(
          response => console.log(response),
          err => console.log(err)
        );
        this.router.navigate(['/contactlist'], { relativeTo: this.route });
        this.dialogRef.close();
      }
    });
  }
}
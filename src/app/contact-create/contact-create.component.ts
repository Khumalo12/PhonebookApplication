import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';


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

export class ContactCreateComponent{
  constructor(
    public dialogRef: MatDialogRef<ContactCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Entry, private contactsService: ContactsService) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.beforeClosed().subscribe(result => {
      if(result.name != undefined && result.phonenumber != undefined)
      {
        this.contactsService.createContact(result);
        this.dialogRef.close();
      }
    });
  }
}
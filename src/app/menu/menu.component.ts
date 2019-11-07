import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactCreateComponent } from '../contact-create/contact-create.component';
import { ContactsService } from '../services/contacts.service';
import { PhonebookStateService } from '../services/phonebookstate.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ContactsService]
})
export class MenuComponent {

  name: string;
  phonenumber: string;
  searchvalue: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

  openDialog(): void {
    this.dialog.open(ContactCreateComponent, {
      width: '500px',
      data: { name: this.name, phonenumber: this.phonenumber }
    });
    this.router.navigate(['contactcreate'],{
      relativeTo: this.route
    });
  }

  searchContact() {
    if (this.searchvalue != undefined) {
      this.router.navigate(['contactsearch/', this.searchvalue],
        {
          relativeTo: this.route
        });
    }
  }

  toContactList() {
    this.router.navigate(['contactlist']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { PhonebookStateService } from '../services/phonebookstate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AlertsComponent } from '../alerts/alerts.component';

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
  alertmessage: string;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private contactsService: ContactsService, public phonebookState: PhonebookStateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = this.phonebookState.getPhonebook();
      console.log(params);
      if (id == undefined) {
        this.router.navigate(['/contactlist']);
      }
      else {
        this.searchvalue = params.searchvalue;
        this.contactsService.searchContacts(id, this.searchvalue)
          .subscribe((result) => {
            if (result.length > 0) {
              this.dataSource = result;
            }
            else {
              this.alertmessage = this.searchvalue + " is not found";
              this.openDialog();
            }
          });
      }
    });
  }

  openDialog(): void {
    this.dialog.open(AlertsComponent, {
      width: '500px',
      data: { message: this.alertmessage }
    });
  }
}

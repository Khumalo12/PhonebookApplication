import { Component } from '@angular/core';
// import { PhonebookService } from './services/phonebook.service';
// import { PhonebookStateService } from './services/phonebookstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [PhonebookService, PhonebookStateService]
})
export class AppComponent {
  title = 'phonebookapp';

  // ngOnInit() {
  //   this.phonebookService.getPhonebook()
  //   .subscribe((result) => 
  //   {
  //     this.phonebookState.setPhonebook(result.phonebookId);
  //   });
  //  }
}

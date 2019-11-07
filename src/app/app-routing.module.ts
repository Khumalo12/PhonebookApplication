import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'contactlist', pathMatch: "full" },
  { path: 'contactlist', component: ContactListComponent},
  { path: 'contactsearch/:searchvalue', component: ContactSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

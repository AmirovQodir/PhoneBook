import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactIdComponent } from './components/contact-id/contact-id.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full'},
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactIdComponent },
  { path: 'contacts/edit/:id', component: EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

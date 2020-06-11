import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact-list/contact/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactFormComponent } from './components/contact-list/add-contact-form/add-contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactIdComponent } from './components/contact-id/contact-id.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
// import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    AddContactFormComponent,
    ContactIdComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

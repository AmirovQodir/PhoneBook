import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public contacts: Contact[] = [
    new Contact('Amirov Qodir', 945329911),
    new Contact('Berdiyer Javohir', 943127135)
  ]
  public addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
}

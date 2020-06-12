import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit(): void {
    this.updateContacts();
  }

  public contacts: Contact[] = [];
  public isFiltered: boolean = false;
  public isAdding: boolean = false;

  public filter(e: KeyboardEvent): void {
    const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    if(value) {
      this.contacts = this.contactsService.updateContacts();
      this.contacts = this.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(value) || contact.phone.includes(value));
      this.isFiltered = true;
    } else {
      this.updateContacts();
      this.isFiltered = false;
    }
  }

  public emptyMessage(): string {
    if(this.isFiltered) {
      return 'Contact is not found';
    }
    if(!this.isFiltered) {
      return 'Contact list is empty. Please add contacts';
    }
  }

  public updateContacts(): void {
    this.contacts = this.contactsService.updateContacts();
  }

  public added(ev) {
    this.isAdding = ev;
  }
}

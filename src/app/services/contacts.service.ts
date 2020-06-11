import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  private contacts: Contact[] = [];

  public updateContacts(): Contact[] {
    this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return this.contacts;
  };

  public addContact(contact: Contact): void {
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  };

  public removeContact(id: string) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  public updateContact(contact: Contact) {
    this.contacts = this.contacts.filter(ct => ct.id !== contact.id);
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}

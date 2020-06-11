import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-id',
  templateUrl: './contact-id.component.html',
  styleUrls: ['./contact-id.component.scss']
})
export class ContactIdComponent implements OnInit {

  public contact: Contact;
  public contactId: string = '';
  constructor( private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactId = id;
    this.getContact();
  }

  public getContact(): void {
    this.contact = this.contactsService.updateContacts().filter(contact => contact.id == this.contactId)[0];
  }
}

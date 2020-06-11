import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() public contact: Contact;
  @Output() remove = new EventEmitter;

  constructor(
    private contactService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  public removeContact() {
    let isConfirm = confirm(`Are you sure dalete ${this.contact.name} ?`);
    if(isConfirm){
      this.contactService.removeContact(this.contact.id)
      this.remove.emit();
    }
  }

  showContact() {
    this.router.navigate(['contacts', this.contact.id]); // should add optional parametrs
  }

  public editContact() {
    this.router.navigate(['contacts/edit', this.contact.id]) // should add optional parametrs
    
  }

}

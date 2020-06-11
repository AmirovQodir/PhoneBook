import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private contactsService: ContactsService
  ) { }
  
  public contact: Contact;
  public contactId: string = '';

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactId = id;
    this.getContact();
  } 
  
  public editContactForm: FormGroup;
  
  public getContact(): void {
    this.contact = this.contactsService.updateContacts().filter(contact => contact.id == this.contactId)[0];
    this.editContactForm = new FormGroup(
      {
        name: new FormControl(`${this.contact.name}`),
        phone: new FormControl(`${this.contact.phone}`),
      }
    );
  }

  onSubmit(){
    this.editContactForm.value.id = this.contactId;
    this.contactsService.updateContact(this.editContactForm.value);
    this.router.navigate(['contacts']);
  }

  onCancel() {
    this.router.navigate(['contacts']);
  }
}

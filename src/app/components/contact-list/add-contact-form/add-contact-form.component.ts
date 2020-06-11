import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent implements OnInit {

  constructor(
    private contactsService: ContactsService
  ) { }

  @Output() public added = new EventEmitter()
  public isShowForm: boolean = false;
  
  public addContactForm: FormGroup;

  showForm(): void {
    this.isShowForm = true;
    this.added.emit(true);
  }

 ngOnInit(): void {
   this.addContactForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl()
    })
  }

  public onCancel(){
    this.added.emit(false);
    this.isShowForm = false;
  }

  public onSubmit() {
    let contact = new Contact(this.addContactForm.value.name, this.addContactForm.value.phone);
    this.contactsService.addContact(contact);
    this.added.emit(false);
    this.addContactForm.reset();
    this.isShowForm = false;
  }
}

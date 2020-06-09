import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent implements OnInit {
  constructor() { }
  @Output() public addContact: EventEmitter<Contact> = new EventEmitter<Contact>()
  public isShowForm: boolean = false;
  
  public addContactForm: FormGroup;

  showForm(): void {
    this.isShowForm = true;
  }

 ngOnInit(): void {
   this.addContactForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl()
    })
  }

  public onCancel(){
    this.isShowForm = false;
  }

  public onSubmit() {
    let contact = new Contact(this.addContactForm.value.name, this.addContactForm.value.phone);
    this.addContact.emit(contact);
    this.addContactForm.reset();
    this.isShowForm = false;
  }
}

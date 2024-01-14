import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  constructor() {}
  ngOnInit() {}

  contactFormControlGroup = new FormGroup({
    senderNameFormControl: new FormControl('', Validators.required),
    senderEmailFormControl: new FormControl('', [Validators.required, Validators.email]),
    senderMessageFormControl: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  handleFormSubmit(): any{
    console.log(this.contactFormControlGroup.value);
  }
}
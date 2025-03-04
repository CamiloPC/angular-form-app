import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './switches-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ]
  });

  public person = {
    gender: 'F',
    wantNotifications: false,

  }

  constructor ( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm.reset( this.person );
  }

  isValidField ( field: string ): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  onSave() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
  }

 }
 

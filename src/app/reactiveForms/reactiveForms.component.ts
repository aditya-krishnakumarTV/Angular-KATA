import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactiveForms.component.html',
  styleUrls: ['./reactiveForms.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      rusername: new FormControl(null, Validators.required),
      rphone: new FormControl(null, Validators.required),
      hobbies: new FormArray([]),
    });
  }

  onSubmitR() {
    console.log(this.signUpForm);
  }

  onAdd() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }
}

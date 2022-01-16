import { User } from './../modal';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateFormComponent {
  users: Array<User> = [];

  addNewUser(form: NgForm) {
    this.users.push(new User(form.value.username, form.value.phone));
  }

  onSubmit(form: NgForm) {
    console.log('submitted!');
    console.log(form);
  }

  deleteUser() {
    this.users.pop();
  }
}

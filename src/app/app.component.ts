import { User } from './modal';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: Array<User> = [];


  @ViewChild('tableName') nameInput: ElementRef;

  ngOnInit() {
    const testObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count greater than 3!'));
        }
        count++;
      }, 1000);
    });

    testObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!');
      }
    );
  }

  constructor(private http: HttpClient) {}

  // nameInput: HTMLInputElement,
  // addNewUser(numberInput: HTMLInputElement) {
  //   this.users.push(
  //     new User(this.nameInput.nativeElement.value, numberInput.valueAsNumber)
  //   );
  // }
  addNewUser(form: NgForm) {
    this.users.push(new User(form.value.username, form.value.phone));
    // this.http
    //   .post(
    //     'https://my-test-backend-9ec30-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
    //     form.value.username
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  deleteUser() {
    this.users.pop();
  }

  onSubmit(form: NgForm) {
    console.log('submitted!');
    console.log(form);
  }

}

// jquery

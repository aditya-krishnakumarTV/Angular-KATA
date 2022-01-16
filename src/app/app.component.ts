import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  // this.http
  //   .post(
  //     'https://my-test-backend-9ec30-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
  //     form.value.username
  //   )
  //   .subscribe((data) => {
  //     console.log(data);
  //   });
}

// jquery

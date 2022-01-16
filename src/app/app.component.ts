import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

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

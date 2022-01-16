import { Subscription, Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit, OnDestroy {
  testObsSub: Subscription;

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

    this.testObsSub = testObservable.subscribe(
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

  constructor(private router: Router) {}

  onReactive() {
    this.router.navigate(['/reactiveForm']);
  }

  onTemplate() {
    this.router.navigate(['/templateForm']);
  }

  ngOnDestroy(): void {
    this.testObsSub.unsubscribe();
  }
}

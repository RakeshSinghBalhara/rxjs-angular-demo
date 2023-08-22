import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-switch-map-example',
  templateUrl: './switch-map-example.component.html',
  styleUrls: ['./switch-map-example.component.scss']
})
export class SwitchMapExampleComponent {
  response: string | undefined;

  constructor(private http: HttpClient) {}

  startRequests() {
    this.response = 'Loading...';

    this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
      switchMap(data => {
        // @ts-ignore
        const userId = data['userId'];
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      })
    ).subscribe(userData => {
      // @ts-ignore
      this.response = `User Name: ${userData['name']}`;
    });
  }
}


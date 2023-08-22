import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private valueSubject = new BehaviorSubject<string>('');

  sendValue(value: string) {
    this.valueSubject.next(value);
  }

  getValue(): Observable<string> {
    return this.valueSubject.asObservable();
  }
}

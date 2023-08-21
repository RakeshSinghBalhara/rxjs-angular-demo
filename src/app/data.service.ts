import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Item} from "./item-list-component/Item";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: Item[] = [
    new Item(1, 'Item 1', 50),
    new Item(2, 'Item 2', 75),
    new Item(3, 'Item 3', 100),
  ];

  private userIds = [1, 2, 3];

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItemsByUserId(userId: number): Observable<any[]> {
    const userItems = this.items.filter(item => item.id === userId);
    return of(userItems);
  }

  getUserIds(): Observable<number> {
    return new Observable<number>(observer => {
      this.userIds.forEach(id => {
        observer.next(id);
      });
      observer.complete();
    });
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  concatMap,
  concatMapTo, defaultIfEmpty,
  every,
  from,
  interval,
  mergeMap,
  mergeMapTo,
  Observable,
  of, sequenceEqual,
  Subscription,
  timer
} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataService} from "../data.service";
import {Item} from "./Item";

@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list-component.component.html',
})
export class ItemListComponent implements OnInit, OnDestroy {
  items$!: Observable<Item[]>;
  emittedValues: string[] = [];
  timerSubscription: Subscription | undefined;
  results: any = null;
  constructor(public dataService: DataService) {}
  ngOnInit(): void {
    this.items$ = this.dataService.getItems();
    // this.items$ = this.dataService.getItems().pipe(
    //   map(items => items.filter(item => item.price > 50)
    // ));
  }
  applyMap() {
    this.items$ = this.dataService.getItems().pipe(
      map(items => items.map(item => ({ ...item, name: item.name.toUpperCase() })))
    );
  }

  applyFilter() {
    this.items$ = this.dataService.getItems().pipe(
      map(items => items.filter(item => item.price > 50))
    );
  }
  reset() {
    this.items$ = this.dataService.getItems();
  }
  applyPluck() {
    // this.items$ = this.dataService.getItems().pipe(
    //   pluck<Item, string>('name')
    // );
  }
  applyConcatMap() {
    this.items$ = this.dataService.getUserIds().pipe(
      concatMap(userId => this.dataService.getItemsByUserId(userId))
    );
  }

  applyConcatMapTo() {
    this.items$ = this.dataService.getUserIds().pipe(
      concatMapTo(this.dataService.getItems())
    );
  }

  applyMergeMap() {
    this.items$ = this.dataService.getUserIds().pipe(
      mergeMap(userId => this.dataService.getItemsByUserId(userId))
    );
  }

  applyMergeMapTo() {
    this.items$ = this.dataService.getUserIds().pipe(
      mergeMapTo(this.dataService.getItems())
    );
  }


  emitValue() {
    const emittedValue$ = of('Value emitted from button click', 'Second string');
    emittedValue$.subscribe(value => this.emittedValues.push(value));

    // Create an observable that emits values from the array
    const array = [1, 2, 3, 4, 5];
    const arrayObservable = from(array);
    arrayObservable.subscribe(
      value => console.log('Received:', value),
      error => console.error('Error:', error),
      () => console.log('Completed')
    );

// Create an observable that emits numbers every 1000 milliseconds (1 second)
    const intervalObservable = interval(1000);

// Subscribe to the observable to receive emitted numbers
    const subscription = intervalObservable.subscribe(
      value => console.log('Received:', value),
      error => console.error('Error:', error),
      () => console.log('Completed')
    );

// Unsubscribe after 5 seconds to stop the interval
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }

  timerValue() {
    // Clear previous emitted values
    this.emittedValues = [];
    // Create an observable that emits values every 1 second
    const intervalObservable = timer(0, 1000);
    // Subscribe to the observable to receive emitted values
    this.timerSubscription = intervalObservable.subscribe(
      value => this.emittedValues.push(value + ''),
      error => console.error('Error:', error),
      () => console.log('Timer Completed')
    );
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  applyDefaultIfEmpty() {
    const emptyObservable = of(); // An empty observable
    const nonEmptyObservable = of(1, 2, 3);
    emptyObservable.pipe(defaultIfEmpty('Empty')).subscribe(result => {
      this.results = { defaultIfEmpty: result };
    });
  }

  applyEvery() {
    const numbersObservable = of(2, 4, 6, 8);
    numbersObservable.pipe(every(number => number % 2 === 0)).subscribe(result => {
      this.results = { every: result };
    });
  }

  applySequenceEqual() {
    const firstObservable = of(1, 2, 3);
    const secondObservable = of(1, 2, 3);

    firstObservable
      .pipe(sequenceEqual(secondObservable))
      .subscribe(result => {
        this.results = { sequenceEqual: result };
      });
  }
}

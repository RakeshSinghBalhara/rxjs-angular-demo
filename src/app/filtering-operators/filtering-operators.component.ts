import {Component} from '@angular/core';

import {fromEvent, interval, timer,} from 'rxjs';
import { debounceTime,
  distinctUntilChanged,
  filter,
  elementAt,
  find,
  first,
  last,
  skip,
  skipUntil,
  skipWhile,
  take,
  takeUntil,
  takeWhile,
  throttleTime,
  sample,
  ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-filtering-operators',
  templateUrl: './filtering-operators.component.html',
  styleUrls: ['./filtering-operators.component.scss']
})
export class FilteringOperatorsComponent {
  result: any;

  applyDebounceTime() {
    const source = fromEvent(document, 'keyup');
    source.pipe(debounceTime(500)).subscribe(event => {
      this.result = `Debounced: ${(<KeyboardEvent>event).key}`;
    });
  }

  applyDistinctUntilChanged() {
    const source = interval(1000);
    source.pipe(distinctUntilChanged()).subscribe(value => {
      this.result = `Distinct value: ${value}`;
    });
  }

  applyFilter() {
    const source = interval(500);

    source.pipe(filter(value => value % 2 === 0)).subscribe(value => {
      this.result = `Even value: ${value}`;
    });
  }

  applyElementAt() {
    const source = interval(1000);

    source.pipe(elementAt(3)).subscribe(value => {
      this.result = `Value at index 3: ${value}`;
    });
  }

  applyFind() {
    const source = interval(1000);

    source.pipe(find(value => value > 5)).subscribe(value => {
      this.result = `First value greater than 5: ${value}`;
    });
  }

  applyFirst() {
    const source = interval(1000);

    source.pipe(first()).subscribe(value => {
      this.result = `First value: ${value}`;
    });
  }

  applyLast() {
    const source = interval(1000);

    source.pipe(last()).subscribe(value => {
      this.result = `Last value: ${value}`;
    });
  }

  applySkip() {
    const source = interval(1000);

    source.pipe(skip(3)).subscribe(value => {
      this.result = `Skipped 3 values, current value: ${value}`;
    });
  }

  applySkipUntil() {
    const source = interval(1000);
    const notifier = timer(3000);

    source.pipe(skipUntil(notifier)).subscribe(value => {
      this.result = `Skipped until notifier fires, current value: ${value}`;
    });
  }

  applySkipWhile() {
    const source = interval(1000);

    source.pipe(skipWhile(value => value < 5)).subscribe(value => {
      this.result = `Skipped while value < 5, current value: ${value}`;
    });
  }

  applyTake() {
    const source = interval(1000);

    source.pipe(take(5)).subscribe(value => {
      this.result = `Taken 5 values, current value: ${value}`;
    });
  }

  applyTakeUntil() {
    const source = interval(1000);
    const notifier = timer(3000);

    source.pipe(takeUntil(notifier)).subscribe(value => {
      this.result = `Taken until notifier fires, current value: ${value}`;
    });
  }

  applyTakeWhile() {
    const source = interval(1000);

    source.pipe(takeWhile(value => value < 5)).subscribe(value => {
      this.result = `Taken while value < 5, current value: ${value}`;
    });
  }

  applyThrottleTime() {
    const source = interval(500);

    source.pipe(throttleTime(1000)).subscribe(value => {
      this.result = `Throttled value: ${value}`;
    });
  }

  applySample() {
    const source = interval(500);
    const notifier = timer(2000, 1000);

    source.pipe(sample(notifier)).subscribe(value => {
      this.result = `Sampled value: ${value}`;
    });
  }

  applyIgnoreElements() {
    const source = interval(1000);

    source.pipe(ignoreElements()).subscribe({
      complete: () => {
        this.result = `Source completed (ignored values)`;
      },
    });
  }
  // Implement methods for other operators here
}


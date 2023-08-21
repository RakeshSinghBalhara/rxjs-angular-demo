import { Component } from '@angular/core';
import {combineLatest, concat, delay, interval, merge, of, race, startWith, withLatestFrom, zip} from 'rxjs';

@Component({
  selector: 'app-combination-operators',
  templateUrl: './combination-operators.component.html',
  styleUrls: ['./combination-operators.component.scss']
})
export class CombinationOperatorsComponent {
  results: any = null;
  applyCombineLatest() {
    const source1 = of('A', 'B', 'C','D');
    const source2 = of(1, 2, 3);

    combineLatest([source1, source2]).subscribe(result => {
      this.results = { combineLatest: result };
    });
  }

  applyConcat() {
    const source1 = of(1, 2, 3);
    const source2 = of(4, 5, 6);

    concat(source1, source2).subscribe(result => {
      this.results = {concat: result};
    });
  }

  applyMerge() {
    const source1 = of('A', 'B', 'C');
    const source2 = of(1, 2, 3);

    merge(source1, source2).subscribe(result => {
      console.log(result);
      this.results = { merge: result };
    });
  }

  applyRace() {
    const source1 = of('A').pipe(delay(1000));
    const source2 = of('B').pipe(delay(500));

    race(source1, source2).subscribe(result => {
      this.results = { race: result };
    });
  }

  applyStartWith() {
    const source = of(1, 2, 3);

    source.pipe(startWith(0)).subscribe(result => {
      this.results = { startWith: result };
    });
  }

  applyWithLatestFrom() {
    const source1 = interval(1000);
    const source2 = interval(3000);

    source1.pipe(withLatestFrom(source2)).subscribe(result => {
      this.results = { withLatestFrom: result };
    });
  }

  applyZip() {
    const source1 = of('A', 'B', 'C', 'D');
    const source2 = of(1, 2, 3);
    zip(source1, source2).subscribe(result => {
      this.results = { zip: result };
    });
  }
}

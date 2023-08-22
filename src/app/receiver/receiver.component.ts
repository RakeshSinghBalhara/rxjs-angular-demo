import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  receivedValue: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getValue().subscribe(value => {
      this.receivedValue = value;
    });
  }
}


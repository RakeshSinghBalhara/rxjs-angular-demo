import { Component } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  inputValue: string = '';

  constructor(private sharedService: SharedService) {}

  sendValue() {
    this.sharedService.sendValue(this.inputValue);
  }
}


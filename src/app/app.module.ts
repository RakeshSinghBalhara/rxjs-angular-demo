import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import {ItemListComponent} from "./item-list-component/item-list-component.component";
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';
import {FormsModule} from "@angular/forms";
import { SwitchMapExampleComponent } from './switch-map-example/switch-map-example.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ItemListComponent, CombinationOperatorsComponent, FilteringOperatorsComponent, ReceiverComponent, SenderComponent, SwitchMapExampleComponent],
  imports: [BrowserModule, FormsModule,HttpClientModule],
  providers: [DataService], // Add the service to the providers array
  bootstrap: [AppComponent],
})
export class AppModule {}

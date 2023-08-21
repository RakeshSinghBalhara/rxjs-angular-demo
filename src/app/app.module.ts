import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import {ItemListComponent} from "./item-list-component/item-list-component.component";
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent, CombinationOperatorsComponent, FilteringOperatorsComponent],
  imports: [BrowserModule],
  providers: [DataService], // Add the service to the providers array
  bootstrap: [AppComponent],
})
export class AppModule {}

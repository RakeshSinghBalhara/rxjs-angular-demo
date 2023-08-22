import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import {SenderComponent} from "./sender/sender.component";
import {ReceiverComponent} from "./receiver/receiver.component";
import {SwitchMapExampleComponent} from "./switch-map-example/switch-map-example.component";

const routes: Routes = [
  { path: 'sender', component: SenderComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'filtering-operators', component: FilteringOperatorsComponent },
  { path: 'switch-map-example', component: SwitchMapExampleComponent },
  { path: '', redirectTo: '/sender', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

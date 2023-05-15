import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {BotoesComponent} from './components/botoes/botoes.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent

}, {
  path: "botoes",
  component: BotoesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

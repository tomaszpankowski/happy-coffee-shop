import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexS1Component } from './index-s1/index-s1.component';

const routes: Routes = [
  {
    path: "",
    component: IndexS1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

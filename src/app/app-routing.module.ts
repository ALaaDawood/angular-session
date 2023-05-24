import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgeComponent } from './age/age.component';

const routes: Routes = [
  {
    path: '',
    component: AgeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

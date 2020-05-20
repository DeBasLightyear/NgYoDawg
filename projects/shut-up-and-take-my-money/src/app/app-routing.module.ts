import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { View1Component } from './view1/view1.component'


const routes: Routes = [
  { path: 'take-my-money/view1', component: View1Component },
  { path: 'take-my-money', redirectTo: 'take-my-money/view1' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

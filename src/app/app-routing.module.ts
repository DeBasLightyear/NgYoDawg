import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { GoDeeperSharedModule } from '../../projects/we-need-to-go-deeper/src/app/app.module'

const routes: Routes = [
  {
    path: 'we-need-to-go-deeper',
    loadChildren: '../../projects/we-need-to-go-deeper/src/app/app.module#GoDeeperSharedModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GoDeeperSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

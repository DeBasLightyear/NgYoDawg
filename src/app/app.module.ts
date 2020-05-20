import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { GoDeeperSharedModule } from '../../projects/we-need-to-go-deeper/src/app/app.module'
import { TakeMyMoneySharedModule } from 'projects/shut-up-and-take-my-money/src/app/app.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoDeeperSharedModule.forRoot(),
    TakeMyMoneySharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

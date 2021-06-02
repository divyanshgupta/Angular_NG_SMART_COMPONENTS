import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDisplayComponent } from './timer/timer-display/timer-display.component';
import { TimerToggleComponent } from './timer/timer-toggle/timer-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerDisplayComponent,
    TimerToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

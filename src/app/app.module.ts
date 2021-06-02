import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerDisplayComponent } from './timer/timer-display/timer-display.component';
import { TimerToggleComponent } from './timer/timer-toggle/timer-toggle.component';
import { TimerDirective } from './timer/timer.directive';
import { TimerFromDirective } from './timer/timer-from.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimerDisplayComponent,
    TimerToggleComponent,
    TimerDirective,
    TimerFromDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

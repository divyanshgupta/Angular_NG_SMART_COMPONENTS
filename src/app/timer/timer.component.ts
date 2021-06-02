import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  OnInit,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerToggleComponent } from './timer-toggle/timer-toggle.component';

@Component({
  selector: 'app-timer',
  template: '<ng-content></ng-content>',
})
export class TimerComponent implements OnInit {
  private subscription: Subscription;

  @Input() init = 0;
  @Input() interval = 1000;

  value: number;
  isPaused = true;

  ngOnInit() {
    this.stop();
  }

  start() {
    this.isPaused = false;
    this.startTimer();
  }

  pause() {
    this.isPaused = true;
    this.stopTimer();
  }

  stop() {
    this.isPaused = true;
    this.value = this.init;
    this.stopTimer();
  }

  startTimer() {
    this.subscription = interval(this.interval).subscribe((_) => {
      this.value++;
    });
  }

  stopTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get isStoppable() {
    return this.init !== this.value;
  }
}

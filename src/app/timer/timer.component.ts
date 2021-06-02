import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  private subscription: Subscription;

  @Input() init = 0;
  @Input() interval = 1000;
  isPaused: boolean;
  value: number;
  constructor() {}

  ngOnInit(): void {
    this.stop();
  }
  stop() {
    this.isPaused = true;
    this.value = this.init;
    this.stopTimer();
  }
  stopTimer() {
    if (this.subscription) this.subscription.unsubscribe();
  }
  pause() {
    this.isPaused = true;
    this.stopTimer();
  }
  start() {
    this.isPaused = false;
    this.startTimer();
  }
  startTimer() {
    this.subscription = interval(this.interval).subscribe((_) => {
      this.value++;
    });
  }
  get isStoppable() {
    return this.init !== this.value;
  }
}

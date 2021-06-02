import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TimerFromDirective } from '../timer-from.directive';
import { TimerDirective } from '../timer.directive';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html',
  styleUrls: ['./timer-toggle.component.css'],
})
export class TimerToggleComponent {
  timer: TimerDirective;
  constructor(public timerFrom: TimerFromDirective) {}
  ngOnInit(): void {
    this.timer = this.timerFrom.timer;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { TimerFromDirective } from '../timer-from.directive';
import { TimerDirective } from '../timer.directive';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css'],
})
export class TimerDisplayComponent implements OnInit {
  timer: TimerDirective;

  constructor(public timerFrom: TimerFromDirective) {}

  ngOnInit(): void {
    this.timer = this.timerFrom.timer;
  }
}

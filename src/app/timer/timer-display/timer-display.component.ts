import { Component, Input, OnInit } from '@angular/core';
import { TimerComponent } from '../timer.component';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css'],
})
export class TimerDisplayComponent implements OnInit {
  constructor(public timer: TimerComponent) {}

  ngOnInit(): void {}
}

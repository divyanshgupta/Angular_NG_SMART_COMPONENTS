import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TimerComponent } from '../timer.component';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html',
  styleUrls: ['./timer-toggle.component.css'],
})
export class TimerToggleComponent {
  constructor(public timer: TimerComponent) {}
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();
  onCompletedTask(){
    this.complete.emit(this.task.id)
  }
}

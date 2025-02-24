import { Component, Output ,EventEmitter, signal, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancle = new EventEmitter<void>();
  @Output() AddTask = new EventEmitter();
  @Input() userId!: string;
  enteredTitle = ''
  enteredSummary = ''
  enteredDueDate = ''
  onCancle(){
    console.log('cancle')
    this.cancle.emit()
  }
  onSubmit(){
    console.log(this.userId);
    this.AddTask.emit(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
        userId: this.userId,
        id: Math.random().toString()
      }
    )
  }
}

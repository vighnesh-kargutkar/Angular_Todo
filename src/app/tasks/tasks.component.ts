import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import {  NewTaskComponent } from './new-task/new-task.component'
import { dummyTasks } from '../dummy-tasks';
import { Task } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent,NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = dummyTasks
  addNetask: boolean = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompletedTask(id: string) { 
  console.log(id,'id');
  this.tasks = this.tasks.filter((task) => task.id !== id); 
  }
  onStartAddTask() {
    this.addNetask= true
  }
  onCancleAddTask(){
    this.addNetask= false
  }
  onAddTask(task: Task) {
    dummyTasks.push(task)
    this.addNetask= false
  }
  
}

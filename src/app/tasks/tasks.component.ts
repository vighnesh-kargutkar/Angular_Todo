import { Component ,Input} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name!: string
  @Input() userId!: string  
  get selectedUserTasks() {
    return dummyTasks.filter(task => task.userId === this.userId)
  }
  onCompletedTask(taskId: string) {
    console.log('Task completed', taskId);
    
  }
  // tasks = dummyTasks.filter(task => task.userId === this.userId)
}

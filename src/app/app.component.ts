import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users'
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor ,NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,
    // NgFor ,NgIf
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  name! : string 
  onSelectedUser(id: string) {
    console.log('Selected user id:', id)
    this.name=DUMMY_USERS.find(user=>user.id===id)!.name
  }
}

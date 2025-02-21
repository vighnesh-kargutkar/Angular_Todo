import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users'
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor ,NgIf} from '@angular/common';

type User = {
  id: string
  name: string
  avatar: string
}
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
  specUser! : User | undefined
  onSelectedUser(id: string) {
    console.log('Selected user id:', id)
    this.specUser=DUMMY_USERS.find(user=>user.id===id)
  }
}

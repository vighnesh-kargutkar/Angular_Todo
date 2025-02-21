import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string
  @Input() name!: string
  // avatar = input.required<string>()
  // name = input.required<string>()
  // imagePath = computed(() => 'assets/users/' + this.avatar())
  get imagePath() {
    return 'assets/users/' + this.avatar
  }
  onSelectedUser() {


  }
}

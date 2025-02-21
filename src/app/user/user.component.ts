import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) avatar!: string
  @Input({ required: true }) name!: string
  @Input({ required: true }) id!: string
  @Output() select = new EventEmitter()
  get imagePath() {
    return 'assets/users/' + this.avatar
  }
  onSelectedUser() {
    this.select.emit(this.id)
  }
}

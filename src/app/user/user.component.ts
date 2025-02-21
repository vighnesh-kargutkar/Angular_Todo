import { Component, computed, EventEmitter, input, Input, Output , output} from '@angular/core';

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
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>()
  // imagePath = computed(() => 'assets/users/' + this.avatar)
  get imagePath() {
    return 'assets/users/' + this.avatar
  }
  onSelectedUser() {
    this.select.emit(this.id)
  }
}

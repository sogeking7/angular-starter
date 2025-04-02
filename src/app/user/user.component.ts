import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from './user.service';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ReversePipe } from '../pipes/reverse.pipe';

@Component({
  selector: 'app-user',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    ReversePipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass',
})
export class UserComponent {
  isEditable = true;
  @Input() occupation = '';
  message = '';
  onMouseLeave() {
    this.message = '';
  }
  onMouseOver() {
    this.message = '🫵🤡';
  }
  user: { username: string; birthday: Date; pi: number; money: number } | null =
    {
      username: 'sogeking7',
      birthday: new Date(2005, 5, 18),
      pi: 3.14159265358,
      money: 1000000000,
    };
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOs' },
    { id: 'linux', name: 'Linux' },
  ];
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  form = {
    favoriteFramework: '',
  };
  showFramework() {
    alert(this.form.favoriteFramework);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

  display = '';
  // userService = inject(UserService);

  // constructor() {
  //   this.display = this.userService.getCars().join(' 🍀 ');
  // }
  constructor(private userService: UserService) {
    this.display = this.userService.getCars().join(' 🍀 ');
  }
}

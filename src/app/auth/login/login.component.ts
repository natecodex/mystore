import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  onSubmit() {
    // Add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }



}

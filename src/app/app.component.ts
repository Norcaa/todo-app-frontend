import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  pressedLogin: boolean = false;
  loggedIn: boolean = false;

  onClick(): void {
    this.pressedLogin = true;
  }

  login(): void {
    this.loggedIn = true;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Med App';

  isLoggedIn = true;

  logOut(): void {
      this.isLoggedIn = false;
  }

}

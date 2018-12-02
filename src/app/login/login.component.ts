import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() isLoggedIn;
  @Output() isLoggedInChange = new EventEmitter<boolean>();

  logIn(): void {
      this.isLoggedIn = true;
      this.isLoggedInChange.emit(this.isLoggedIn);
  }

  constructor() { }

  ngOnInit() {
  }

}

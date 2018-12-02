import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn;
  @Output() isLoggedInChange = new EventEmitter<boolean>();

  logOff(): void {
      this.isLoggedIn = false;
      this.isLoggedInChange.emit(this.isLoggedIn);
  }

  constructor() { }

  ngOnInit() {
  }

}

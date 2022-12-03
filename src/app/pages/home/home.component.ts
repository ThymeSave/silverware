import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public constructor(public authService: AuthService) {
  }
}

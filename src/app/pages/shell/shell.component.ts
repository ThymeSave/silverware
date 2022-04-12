import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {

  constructor(public authService : AuthService) {
  }

  ngOnInit(): void {
  }

}

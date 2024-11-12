import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
links:any = [
  {name: "Home", urk: "home"},
  {name: "Services", urk: "services"},
  {name: "Contact", urk: "contact"},
  {name: "About us", urk: "about"},
]
}

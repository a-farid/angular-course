// app.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { icons, LucideModule } from '../models/icons';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    FormsModule,
    LucideModule,
    DropdownComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  readonly icons = icons;

  inputType: string = 'text';
  name: string = 'tests';
  selectedState: string = '';
  states: string[] = ['California', 'Texas', 'Florida', 'New York'];

  ngOnInit() {}
}

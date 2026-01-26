import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLinkActive,
  RouterLink,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'course-booking-site';
}

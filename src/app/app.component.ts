import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLinkActive,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'course-booking-site';
}

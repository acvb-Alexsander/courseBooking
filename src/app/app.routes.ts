import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseAboutComponent } from './course-about/course-about.component';
import { SignFormComponent } from './sign-form/sign-form.component';

export const routes: Routes = [
  //Out twi main routes:
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'about', component: CourseAboutComponent },
  { path: 'sign-up', component: SignFormComponent },
];

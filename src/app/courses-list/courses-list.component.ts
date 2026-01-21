import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {
  title = 'Available Courses';
  courses = [
    {
      id: 1,
      title: 'Angular Basics',
      description: 'learn the basics of Angular',
      price: 49,
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Deep dive into Angular internals',
      price: 99,
    },
    {
      id: 3,
      title: 'RxJS in Depth',
      description: 'Become A fullstack Developer',
      price: 149,
    },
  ];
}

import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle, DatePipe, CurrencyPipe, CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {
  courseList = new Array<any>();
  title = 'Available Courses';
  courses = [
    {
      id: 1,
      title: 'Angular Basics',
      description: 'learn the basics of Angular',
      price: 49,
      date: '15-08-2024',
      soldOut: false,
      img: 'angular-logo.png',
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Deep dive into Angular internals',
      price: 99,
      date: '21-01-2026',
      soldOut: false,
      img: 'angular-logo.png',
    },
    {
      id: 3,
      title: 'RxJS in Depth',
      description: 'Become A fullstack Developer',
      price: 149,
      date: '08-11-2026',
      soldOut: true,
      img: 'angular-logo.png',
    },
  ];

  ngOnInit(): void {
    console.log('Courses list');
  }

  onCourseBooked(course: any): void {
    console.log('Parent heard about booking: ', course.title);
  }

  addToWishList(course: any): void {
    console.log('add to wish list: ', course.title);
    this.courseList.push(course);
  }
}

import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  /*
  private courses: Course[] = [
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
  ];*/

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  //Get all courses
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }
}

import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  course: Course | null = null;

  constructor(private courseService: CourseService) {}

  loadCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err: any) => {
        console.error('Error fetching course details:', err);
      },
    });
  }
}

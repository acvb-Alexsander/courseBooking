import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Initialize component logic here if needed
    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      if (idString) {
        const id = +idString;
        this.loadCourseById(id);
      }
    });
  }

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

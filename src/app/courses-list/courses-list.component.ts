import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  imports: [CurrencyPipe, CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {
  courseList: Course[] = [];
  courses: Course[] = [];
  title = 'Available Courses';

  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
      const description = params.get('description');
      this.loadCourses(description);
    });
  }

  loadCourses(description?: string | null): void {
    this.courseService.getCourses(description).subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.log('Error feaching courses:', err);
      },
    });
  }

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking: ', course.title);
  }

  addToWishList(course: Course): void {
    console.log('add to wish list: ', course.title);
    this.courseList.push(course);
  }
}

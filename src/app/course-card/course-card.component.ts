import { NgStyle, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [NgStyle, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishListed = new EventEmitter<any>();

  constructor(private router: Router) {}

  onBookCourse() {
    this.courseBooked.emit(this.course);
    return alert('Course booked successfully!');
  }

  addToWishList() {
    this.wishListed.emit(this.course);
  }

  specialOfferPrice(): number | null {
    if (this.course && this.course.price < 50) {
      return this.course.price;
    }
    return null;
  }

  goToDetails(courseId: number | undefined): void {
    this.router.navigate(['/courses', courseId]);
  }
}

import { NgStyle, DatePipe, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishListed = new EventEmitter<any>();

  onBookCourse() {
    this.courseBooked.emit(this.course);
  }

  addToWishList() {
    this.wishListed.emit(this.course);
  }
}

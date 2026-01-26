import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-create-course',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css',
})
export class CreateCourseComponent implements OnInit {
  createCourseForm!: FormGroup;
  submissonSucessful: boolean = false;
  submissionError: string = '';

  constructor(
    private formBuild: FormBuilder,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.createCourseForm = this.formBuild.group({
      title: ['', Validators.required, Validators.minLength(3)],
      description: ['', Validators.required, Validators.minLength(10)],
      price: [null, Validators.required, Validators.min(0)],
      date: ['', Validators.required],
      img: ['', Validators.required],
      onSale: [false],
    });
  }

  get title() {
    return this.createCourseForm.get('title');
  }

  get description() {
    return this.createCourseForm.get('description');
  }
  get price() {
    return this.createCourseForm.get('price');
  }

  get date() {
    return this.createCourseForm.get('date');
  }

  get img() {
    return this.createCourseForm.get('img');
  }

  get onSale() {
    return this.createCourseForm.get('onSale');
  }

  onSubmit(): void {
    if (this.createCourseForm.invalid) {
      return;
    }

    const newCourse: Course = {
      id: 0,
      title: this.title?.value,
      description: this.description?.value,
      price: this.price?.value,
      date: this.date?.value,
      img: this.img?.value,
      onSale: this.onSale?.value,
    };
    this.courseService.addCourse(newCourse).subscribe({
      next: (course) => {
        this.submissonSucessful = true;
        this.submissionError = '';
        this.createCourseForm.reset();
      },
      error: (err) => {
        this.submissionError = 'Error creating course. Please try again.';
        this.submissonSucessful = false;
      },
    });
  }
}

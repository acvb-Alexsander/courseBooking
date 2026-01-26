import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-sign-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-form.component.html',
  styleUrl: './sign-form.component.css',
})
export class SignFormComponent implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];
  submissionSuccess: boolean = false;
  submissionError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      enrolledCourseId: [null, Validators.required],
    });

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      },
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get course() {
    return this.signUpForm.get('course');
  }

  get enrolledCourseId() {
    return this.signUpForm.get('enrolledCursedId');
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    const newStudent: Student = {
      id: 0,
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      enrolledCourseId: this.signUpForm.value.enrolledCourseId,
    };

    this.courseService.addStudent(newStudent).subscribe({
      next: (student: Student) => {
        this.submissionSuccess = true;
        this.signUpForm.reset();
      },
      error: (err) => {
        this.submissionSuccess = false;
        this.submissionError = 'Error submitting the form. Please try again.';
        console.error('Error adding student:', err);
      },
    });
  }
}

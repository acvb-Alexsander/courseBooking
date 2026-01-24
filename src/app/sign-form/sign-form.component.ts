import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-sign-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-form.component.html',
  styleUrl: './sign-form.component.css',
})
export class SignFormComponent implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      course: [''],
      enrolledCursedID: [null],
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

  get enrolledCursed() {
    return this.signUpForm.get('enrolledCursed');
  }
}

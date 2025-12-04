import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];
  submissionSuccessful: boolean = false;
  submissionError: string = '';

  onSubmit() {
    console.log(`Submitting sign-up form... ${this.signUpForm.valid}`);

    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      console.log('Form submitted successfully with data:', formData);
      this.submissionSuccessful = true;
      this.submissionError = '';
    } else {
      console.log('Form submission failed. Please correct the errors and try again.');
      this.submissionSuccessful = false;
      this.submissionError = 'Please correct the errors in the form before submitting.';
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      email: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email],
      ],

      enrolledCourseId: [null],
    });

    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.cdr.detectChanges();
    });
  }

  signUpFormField(field: string): string {
    return this.signUpForm.get(`${field}`)?.value;
  }

  signUpFormSetFieldValue(field: string, value: string) {
    this.signUpForm.get(`${field}`)?.setValue(value);
  }
}

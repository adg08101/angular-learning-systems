import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-course-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-course-form.html',
  styleUrl: './create-course-form.css',
})
export class CreateCourseForm implements OnInit {
  createCourseForm!: FormGroup;

  course: Course = {
    title: '',
    description: '',
    id: 0,
    price: 0,
  };

  constructor(private courseService: CourseService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createCourseForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
    console.log('CreateCourseForm initialized');
  }

  onSubmit() {
    console.log(`Submitting create course form... ${this.createCourseForm.valid}`);

    if (this.createCourseForm.valid) {
      const formData = this.createCourseForm.value;
      console.log('Form submitted successfully with data:', formData);
      this.course = {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        id: 0,
      };
      this.courseService.addCourse(this.course).subscribe({
        next: (response: any) => {
          console.log('Course created successfully:', response);
        },
        error: (error: any) => {
          console.error('Error creating course:', error);
        },
      });
    } else {
      console.log('Form submission failed. Please correct the errors and try again.');
    }
  }
}

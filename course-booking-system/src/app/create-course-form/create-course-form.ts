import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-course-form.html',
  styleUrl: './create-course-form.css',
})
export class CreateCourseForm implements OnInit {
  createCourseForm!: FormGroup;

  course: Course = {
    id: Math.floor(Math.random() * 1000000),
    title: '',
    description: '',
    price: 0,
    date: Date.now().toString(),
    img: 'default-course.png',
    soldOut: false,
    onSale: true,
  };

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCourseForm = this.formBuilder.group({
      id: [this.course.id],
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.min(0)]],
      date: [this.course.date],
      img: [this.course.img],
      soldOut: [this.course.soldOut],
      onSale: [this.course.onSale],
    });
    console.log('CreateCourseForm initialized');
  }

  onSubmit() {
    console.log(`Submitting create course form... ${this.createCourseForm.valid}`);

    if (this.createCourseForm.valid) {
      const formData = this.createCourseForm.value;
      console.log('Form submitted successfully with data:', formData);
      this.course = {
        id: formData.id,
        title: formData.title,
        description: formData.description,
        price: formData.price,
        date: formData.date,
        img: formData.img,
        soldOut: formData.soldOut,
        onSale: formData.onSale,
      };
      this.courseService.addCourse(this.course).subscribe({
        next: (response: any) => {
          console.log('Course created successfully:', response);
          this.createCourseForm.reset({
            id: Math.floor(Math.random() * 1000000),
            date: Date.now().toString(),
            img: 'default-course.png',
            soldOut: false,
            onSale: true,
          });
          this.router.navigate(['/courses']);
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

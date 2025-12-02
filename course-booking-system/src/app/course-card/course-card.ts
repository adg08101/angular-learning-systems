import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit {
  @Input() course!: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishlistAdded = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(`CourseCard component initialized for course: ${this.course.title}`);
  }

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  };

  onWishlistAdded(): void {
    this.wishlistAdded.emit(this.course);
  };
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishlistAdded = new EventEmitter<any>();

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  };

  onWishlistAdded(): void {
    this.wishlistAdded.emit(this.course);
  };
}

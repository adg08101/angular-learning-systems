import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Course } from '../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  onWishlistAdded(): void {
    this.wishlistAdded.emit(this.course);
  }

  onSeeDetails(course: Course): void {
    this.router.navigate(['/courses', course.id]);
  }
}

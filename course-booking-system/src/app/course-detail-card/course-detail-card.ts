import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Input } from '@angular/core';
import { CourseService } from '../services/course-service';

@Component({
  selector: 'app-course-detail-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-detail-card.html',
  styleUrl: './course-detail-card.css',
})
export class CourseDetailCard implements OnInit {
  @Input() courseId!: number;
  courseDetails!: Course;

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.courseService.getCourseById(this.courseId).subscribe(
      (course: Course) => {
        this.courseDetails = course;
        this.cdr.detectChanges();
        console.log('Course details fetched:', this.courseDetails);
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }
}

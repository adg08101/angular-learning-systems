import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { CourseService } from '../services/course-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-detail-card.html',
  styleUrl: './course-detail-card.css',
})
export class CourseDetailCard implements OnInit {
  courseId!: number;
  courseDetails!: Course;

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id') ? +params.get('id')! : 0;
    });

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

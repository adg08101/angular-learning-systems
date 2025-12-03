import { Component, signal } from '@angular/core';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetailCard } from './course-detail-card/course-detail-card';

@Component({
  selector: 'app-root',
  imports: [CoursesList, CourseDetailCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}

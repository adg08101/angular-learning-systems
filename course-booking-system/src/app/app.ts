import { Component, signal } from '@angular/core';
import { CoursesList } from './courses-list/courses-list';

@Component({
  selector: 'app-root',
  imports: [CoursesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}

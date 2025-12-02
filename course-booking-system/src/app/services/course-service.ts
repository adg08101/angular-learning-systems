import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000/courses';

  // Holds the list of courses and emits new values
  private _courses$ = new BehaviorSubject<Course[]>([]);
  public courses$ = this._courses$.asObservable();

  constructor(private http: HttpClient) {
    this.loadCourses();
  }

  /**
   * Fetch courses from the server and update the stream
   */
  private loadCourses(): void {
    this.http.get<Course[]>(this.baseUrl).subscribe({
      next: (data) => {
        console.log(`Courses loaded from server: ${data.length}`);
        this._courses$.next(data);
      },
      error: (err) => {
        console.error('Failed to load courses:', err);
      },
    });
  }
}

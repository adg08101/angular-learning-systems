import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // enrollStudent should receive an Student object
  enrollStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students`, student);
  }

  // GET all courses
  getCourses(description?: string | null): Observable<Course[]> {
    let url = `${this.baseUrl}/courses`;
    if (description) {
      url += `?description=${description}`;
    }
    return this.http.get<Course[]>(url);
  }

  // GET all students
  getAllStudents(): Observable<Student[]> {
    // This is a mock implementation. Replace with actual HTTP call if needed.
    let url = `${this.baseUrl}/students`;
    return this.http.get<Student[]>(url);
  }

  // GET course by ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  // POST a new course
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }
}

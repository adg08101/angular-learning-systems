import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course-service';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  courses: Course[] = [];
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private courseService: CourseService, private cfr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchCourses();
  }

  fetchStudents(): void {
    this.loading = true;
    this.courseService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
        this.cfr.detectChanges();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching students:', err);
        this.errorMessage = 'Failed to load students. Please try again later.';
        this.loading = false;
      }
    });
  }

  fetchCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
        this.cfr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      }
    });
  }

  getCourseTitle(courseId: number): string {
    const course = this.courses.find(c => c.id == courseId);
    return course ? course.title : 'Unknown Course';
  }

}

import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course-service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {
  title: string = 'Available courses for you';
  wishList: Course[] = [];
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const descriptionFilter = this.route.snapshot.queryParamMap.get('description');

    this.courseService.getCourses(descriptionFilter ? descriptionFilter : null).subscribe((courses) => {
      this.courses = courses;
      this.cdr.detectChanges();
    });
  }

  onCourseBooked(event: any): void {
    console.log(`Course booked successfully ${event.title}`);
  }

  onWishlistAdded(event: Course): void {
    const alreadyExists = this.wishList.some((course: Course) => course.title === event.title);

    if (alreadyExists) {
      console.log(`Course already added to wish list ${event.title}`);
      return; // exits the function
    }
    this.wishList.push(event);
    console.log(`Course added to wish list successfully ${event.title}`);
  }

  onRemoveFromWishlist(event: any): void {
    const title = event.target.innerText;

    this.wishList = this.wishList.filter((course: Course) => {
      return course.title !== title;
    });

    console.log(`Course removed from WishList successfully ${title}`);
  }
}

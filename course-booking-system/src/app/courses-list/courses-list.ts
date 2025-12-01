import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {
  title: string = 'Available courses for you';
  wishList: Course[] = [];
  courses: Course[] = [
    {
      id: 1,
      title: 'Intro to Angular',
      description: 'Learn the basics of Angular',
      price: 49,
      date: '2025-03-01',
      soldOut: false,
      img: '/angular-logo.png',
      onSale: false,
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Deep dive into Angular internals',
      price: 99,
      date: '2025-04-10',
      soldOut: true,
      img: '/angular-logo.png',
      onSale: true,
    },
    {
      id: 3,
      title: 'RxJS Fundamentals',
      description: 'Asynchronous data streams',
      price: 45,
      date: '2025-05-05',
      img: '/rxjs-logo.png',
      soldOut: false,
      onSale: true,
    },
  ];

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

  ngOnInit(): void {
    console.log('Mounting component');
  }
}

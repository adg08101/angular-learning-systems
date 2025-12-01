import { Component, Input } from '@angular/core';
import { NgStyle, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course: any;

  viewDetails(title: string) {
    alert(title);
  };
}

import { Routes } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetailCard } from './course-detail-card/course-detail-card';
import { About } from './about/about';

export const routes: Routes = [
  // Our two main routes:
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesList },
  { path: 'courses/:id', component: CourseDetailCard },
  { path: 'about', component: About },
];

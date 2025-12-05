import { Routes } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetailCard } from './course-detail-card/course-detail-card';
import { About } from './about/about';
import { SignUpForm } from './sign-up-form/sign-up-form';
import { CreateCourseForm } from './create-course-form/create-course-form';

export const routes: Routes = [
  // Our two main routes:
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesList },
  { path: 'courses/:id', component: CourseDetailCard },
  { path: 'about', component: About },
  { path: 'sign-up', component: SignUpForm },
  { path: 'create-course', component: CreateCourseForm },
];

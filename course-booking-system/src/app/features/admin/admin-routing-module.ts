import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
    children: [
      {
        path: 'list-students',
        loadComponent: () =>
          import('./create-course-form/create-course-form').then((m) => m.CreateCourseForm),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

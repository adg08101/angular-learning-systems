import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list';
import { DashboardComponent } from './dashboard/dashboard';
import { CreateCourseForm } from './create-course-form/create-course-form';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'students',
        component: StudentListComponent,
      },
      {
        path: 'new-course',
        component: CreateCourseForm,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

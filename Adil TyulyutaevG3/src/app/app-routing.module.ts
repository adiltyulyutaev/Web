import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.Component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/jobs', pathMatch: 'full'},
  {path: 'jobs', component: JobComponent },
  {path: 'jobs/:jobsId', component: JobDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

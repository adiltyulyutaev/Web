import { Injectable } from '@angular/core';
import {Observable, of }  from 'rxjs';
import { jobs, Job } from './jobs';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  getJobs():Observable<Job[]>{
    return of(jobs);
  }

  getJob(id:number): Observable<Job>{
    return of(jobs.find(job =>job.id === id ));
  }
  constructor() { }
}

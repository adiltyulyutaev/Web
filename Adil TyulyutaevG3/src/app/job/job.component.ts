import { Component, OnInit } from '@angular/core';
import { Job } from '../jobs';
import {JobService} from '../job.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  allJobs: Job[] = [];

  constructor(private jobService : JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs()
  {
    this.jobService.getJobs().subscribe(jobs => this.allJobs = jobs);
    console.log('sdagfg',this.allJobs)
  }

}

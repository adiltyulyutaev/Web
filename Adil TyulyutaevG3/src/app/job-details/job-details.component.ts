import { Component, OnInit } from '@angular/core';
import {jobs, Job} from '../jobs';
import { JobService } from '../job.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job:Job;
  constructor(
    private route: ActivatedRoute,
    private jobService : JobService
  ) { }

  ngOnInit(): void {
  }

  getJob(){
    const id = +this.route.snapshot.paramMap.get('jobsId');
    this.jobService.getJob(id).subscribe(job=>this.job = job);
  }
  like()
  {
    this.job.like_count=this.job.like_count+1;
  }

}

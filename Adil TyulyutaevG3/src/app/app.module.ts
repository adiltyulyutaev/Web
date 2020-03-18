import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

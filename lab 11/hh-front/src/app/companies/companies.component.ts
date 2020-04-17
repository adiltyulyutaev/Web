import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/Company';
import { KekserviceService  as kek }from '../kekservice.Service' 
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];
  constructor(private kek: kek) { }

  ngOnInit(): void {
  console.log(this.companies)
    
    this.getCompanies();

  }

  getCompanies(): void {
    this.kek.getCompanies().subscribe(companies => this.companies = companies);

  }
}
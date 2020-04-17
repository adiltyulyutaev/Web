import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../interfaces/Vacancy';
import { KekserviceService  as kek }from '../kekservice.Service' 
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
	vacancies : Vacancy[];
  constructor(private kek: kek,
  	 		  private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.getVacancies();
  }

  getVacancies(): void{
  	const companyId = +this.route.snapshot.paramMap.get('companyId');
  	this.kek.getVacanciesByCompanyId(companyId).subscribe(vacancies => this.vacancies = vacancies);
  }
}

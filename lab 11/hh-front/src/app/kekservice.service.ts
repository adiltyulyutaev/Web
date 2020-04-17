import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../interfaces/Company';
import { Vacancy } from '../interfaces/Vacancy';

@Injectable({
  providedIn: 'root'
})
export class KekserviceService {

  constructor(private http: HttpClient) { }
  getCompanies(): Observable<Company[]>{
  	return this.http.get<Company[]>('http://127.0.0.1:8000/api/companies');
  }

  getVacanciesByCompanyId(companyId): Observable<Vacancy[]> {
    const url = `http://127.0.0.1:8000/api/companies/ ${companyId} /vacancies`;
    return this.http.get<Vacancy[]>(url);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://127.0.0.1:8000/api/login/`, {
      username,
      password
    });
  }
}

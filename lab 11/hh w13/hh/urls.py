from django.contrib import admin
from django.urls import path
from api.views import fbv, cbv
from rest_framework_jwt.views import obtain_jwt_token
import api.views.views as v

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('api/companies', fbv.companies_list),
    path('api/companies/<int:company_id>', fbv.company_details),
    path('api/companies/<int:company_id>/vacancies', fbv.vacancies_list_by_company),
    path('api/vacancies/', cbv.VacanciesList.as_view()),
    path('api/vacancies/<int:vacancy_id>', cbv.VacancyDetails.as_view()),
    path('api/vacancies/top_ten/', cbv.TopVacancies.as_view()),
    ]


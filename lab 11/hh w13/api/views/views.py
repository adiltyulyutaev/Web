from django.http.response import HttpResponse, JsonResponse

from api.models import Company, Vacancy


# Create your views here.
def get_companies(request):
    c = Company.objects.all()
    c_json = [cm.to_json() for cm in c]
    return JsonResponse(c_json, safe=False)


def get_company(request, id):
    c = Company.objects.all()
    for i in c:
        if i.id == id:
            out = i.to_json()
            return JsonResponse(out)
    return HttpResponse("<h1>No such file .(</h1>")


def get_vacancy_by_company(request, id):
    v = Vacancy.objects.all()
    out = []
    for vac in v:
        if vac.company.id == id:
            out.append(vac.to_json())
    return JsonResponse(out, safe=False)


def get_vacancies(request):
    v = Vacancy.objects.all()
    vacs = [vc.to_json() for vc in v]
    return JsonResponse(vacs, safe=False)


def get_vacancy(request, id):
    v = Vacancy.objects.all()
    for i in v:
        if i.id == id:
            out = i.to_json()
            return JsonResponse(out)
    return HttpResponse("<h1>No such file .(</h1>")


def sort_salary(vac):
    return vac.salary


def top_ten(request):
    v = Vacancy.objects.all()
    out = sorted(v, key=sort_salary)[-10:]
    out = [cm.to_json() for cm in out]
    return JsonResponse(out, safe=False)

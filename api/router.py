import sys

from django.conf import settings
from django.urls import path
from django.http import HttpResponse
from django.http import JsonResponse
from django.urls import re_path


# from main import getProf

from main import (
    getProf,
    getList,
)


settings.configure(
    DEBUG=True,  # For debugging
    ALLOWED_HOSTS=['*'],
    ROOT_URLCONF=__name__,
    INSTALLED_APPS=["corsheaders"],
    MIDDLEWARE=["corsheaders.middleware.CorsMiddleware", "django.middleware.common.CommonMiddleware"],
    CORS_ALLOW_ALL_ORIGINS = True
)
# def home(request):
#     # print(request)
#     return JsonResponse({"home": "home"})
def select(request):
    params = [f"{key}={value}" for key, value in request.GET.lists()]
    print(1, request)
    print(2, request.GET)

    print(3, params)
    print(4, request.GET.lists())
    # information_to_print = f"Method: {request.method}\nPath: {request.path}\nQuery params: {params}\nBody: {request.body}"
    # print(information_to_print)
    return JsonResponse({"select": "select"})

def home(request):
    return JsonResponse({"data": ''})
def prof(request, id = ""):
    return JsonResponse({"data": getProf(id)})
def listOptions(request):
    return JsonResponse({"data": getList()})


urlpatterns = [
    path('', home),
    path('item/<int:id>', prof),
    path('list', listOptions),

    # path('', home),
    # re_path(".*", select),
]

if __name__ == "__main__":
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
    
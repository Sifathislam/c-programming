from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    # return HttpResponse("this home pasge")
     return render(request,'first_app/home.html')
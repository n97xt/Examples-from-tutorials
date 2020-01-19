from django.http import HttpResponse
from django.shortcuts import  render
from django.views import View
from .models import Film
from rest_framework import viewsets
from .serializers import FilmFullSerializer

# Create your views here.

# class DrugaView(View):
#
#     filmy = Film.objects.get(id=3)
#     print(filmy.tytul)
#     # for film in filmy:
#     #     print(film.tytul)
#
#     # tekst = f"Witam z class View Mamy filmów {len(filmy)}"
#
#     def get(self, request):
#         return HttpResponse(self.tekst)

# def pierwsza(request):
#     return HttpResponse("Witam w naszej apce")

def pierwsza(request):
    filmy = Film.objects.all()
    return render(request, "pierwsza.html", {"filmy": filmy})

class FilmViewSet(viewsets.ModelViewSet):
    serializer_class = FilmFullSerializer
    queryset = Film.objects.all()

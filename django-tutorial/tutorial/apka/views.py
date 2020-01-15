from django.http import HttpResponse
from django.views import View
from .models import Film

# Create your views here.

class DrugaView(View):

    filmy = Film.objects.get(id=3)
    print(filmy.tytul)
    # for film in filmy:
    #     print(film.tytul)

    # tekst = f"Witam z class View Mamy filmów {len(filmy)}"

    def get(self, request):
        return HttpResponse(self.tekst)

def pierwsza(request):
    return HttpResponse("Witam w naszej apce")
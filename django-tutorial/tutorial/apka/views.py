from django.http import HttpResponse
from django.views import View

# Create your views here.

class DrugaView(View):

    tekst = "Witam z class View"

    def get(self, request):
        return HttpResponse(self.tekst)

def pierwsza(request):
    return HttpResponse("Witam w naszej apce")
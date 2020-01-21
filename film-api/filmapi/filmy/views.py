from rest_framework import viewsets
from .serializers import FilmSerializer, FilmFullSerializer
from rest_framework.response import Response
from .models import Film
# Create your views here.
class FilmViewset(viewsets.ModelViewSet):
    serializer_class = FilmSerializer
    queryset = Film.objects.all()

    def retrieve(self, request, *args, **kwargs):
        film = self.get_object()
        serializer = FilmFullSerializer(film)
        return Response(serializer.data)
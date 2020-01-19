from django.urls import path, include
from . import views
# from .views import DrugaView
from rest_framework import routers
from .views import FilmViewSet


router = routers.DefaultRouter()
router.register('filmy', FilmViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('powitanie', views.pierwsza, name="pierwsza"),
    # path('druga/', DrugaView.as_view()),
]
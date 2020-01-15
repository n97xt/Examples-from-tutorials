from django.urls import path
from . import views
from .views import DrugaView

urlpatterns = [
    path('powitanie', views.pierwsza, name="pierwsza"),
    path('druga/', DrugaView.as_view()),]
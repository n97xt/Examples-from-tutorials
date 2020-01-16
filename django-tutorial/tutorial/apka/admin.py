from django.contrib import admin
from .models import Film

# Register your models here.

@admin.register(Film)

class FilmAdmin(admin.ModelAdmin):
    list_display = ['tytul', 'dlugosc', 'data_premiery']
    list_filter = ['data_premiery']
    search_fields = ['tytul', 'opis']
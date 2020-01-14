from django.db import models

lista = (
    ("jeden", "test1"),
    ("dwa", "test2"),
)
# Create your models here.
class Film(models.Model):
    tytul = models.CharField(null=True, blank=True, max_length=32, unique=True, choices=lista, default='jeden')
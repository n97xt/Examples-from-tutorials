from django.db import models

# Create your models here.
class Film(models.Model):
    tytul = models.CharField(max_length=128)
    opis = models.TextField(default='')

    data_premiery = models.DateField(null=False, blank=False)

    dlugosc = models.IntegerField(default=0)

    plakat = models.ImageField(upload_to="images", blank=True)

    def __str__(self):
        return self.tytul
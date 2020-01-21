from django.db import models

class Film(models.Model):
    tytul = models.CharField(max_length=64)
    opis = models.TextField()
    rok = models.IntegerField(default=1900)
    plakat = models.ImageField(upload_to='plakaty', default=None)

# W ten sposób zamieniamy Film object(1) na nazwe filmu
    def __str__(self):
        return self.tytul
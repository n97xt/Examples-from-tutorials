# Generated by Django 3.0.2 on 2020-01-14 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apka', '0005_auto_20200114_2000'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='dlugosc',
            field=models.IntegerField(default=0),
        ),
    ]

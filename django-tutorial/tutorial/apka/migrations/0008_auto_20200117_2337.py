# Generated by Django 3.0.2 on 2020-01-17 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apka', '0007_film_plakat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='data_premiery',
            field=models.DateField(),
        ),
    ]

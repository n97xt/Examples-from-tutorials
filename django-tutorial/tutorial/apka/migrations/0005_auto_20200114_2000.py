# Generated by Django 3.0.2 on 2020-01-14 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apka', '0004_auto_20200114_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='data_premiery',
            field=models.DateTimeField(),
        ),
    ]
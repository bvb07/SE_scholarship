# Generated by Django 3.2.11 on 2022-04-10 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0033_kuy2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registerscholarship',
            name='statusRound',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]

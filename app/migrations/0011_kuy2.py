# Generated by Django 3.2.11 on 2022-03-09 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_kuy2'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentfile',
            name='checkFileFile',
            field=models.BooleanField(default=False),
        ),
    ]

# Generated by Django 3.2.11 on 2022-04-09 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0028_kuy2'),
    ]

    operations = [
        migrations.AddField(
            model_name='commiteevote',
            name='sumpoint',
            field=models.TextField(blank=True, null=True),
        ),
    ]

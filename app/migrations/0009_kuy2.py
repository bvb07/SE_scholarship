# Generated by Django 3.2.11 on 2022-03-09 13:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_kuy2'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentfile',
            old_name='National_ID_card',
            new_name='national_ID_card',
        ),
        migrations.RenameField(
            model_name='studentfile',
            old_name='Profile_Essay',
            new_name='profile_Essay',
        ),
        migrations.RenameField(
            model_name='studentfile',
            old_name='Transcript',
            new_name='transcript',
        ),
    ]

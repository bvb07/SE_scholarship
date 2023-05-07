# Generated by Django 3.2.11 on 2022-04-10 11:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0032_kuy2'),
    ]

    operations = [
        migrations.CreateModel(
            name='TutorialRegisterStudent',
            fields=[
                ('tutor_id', models.AutoField(primary_key=True, serialize=False)),
                ('tutorialFile', models.FileField(blank=True, null=True, upload_to='Tutorial/', validators=[django.core.validators.FileExtensionValidator(['pdf'])])),
            ],
        ),
    ]
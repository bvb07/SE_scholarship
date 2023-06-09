# Generated by Django 3.2.11 on 2022-03-24 15:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_kuy2'),
    ]

    operations = [
        migrations.CreateModel(
            name='Weightcriteriapoint',
            fields=[
                ('weight_id', models.AutoField(primary_key=True, serialize=False)),
                ('criterianame', models.CharField(blank=True, max_length=255, null=True)),
                ('message', models.TextField(blank=True, null=True)),
                ('point', models.IntegerField(blank=True, null=True)),
                ('managescho_id', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='app.managescholarship')),
            ],
        ),
    ]

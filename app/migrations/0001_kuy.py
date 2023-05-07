# Generated by Django 4.0.2 on 2022-03-04 13:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AcademicYear',
            fields=[
                ('acayear_id', models.AutoField(primary_key=True, serialize=False)),
                ('year', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Managescholarship',
            fields=[
                ('managescho_id', models.AutoField(primary_key=True, serialize=False)),
                ('srcUpload', models.ImageField(blank=True, null=True, upload_to='image/')),
                ('srcStartDate', models.DateField()),
                ('srcEndDate', models.DateField()),
                ('majorSelect', models.TextField(blank=True, null=True)),
                ('nameScholar', models.CharField(blank=True, max_length=255, null=True)),
                ('costScholar', models.CharField(blank=True, max_length=255, null=True)),
                ('amountScholar', models.CharField(blank=True, max_length=255, null=True)),
                ('detailScholar', models.TextField(blank=True, null=True)),
                ('qualificationScholar', models.TextField(blank=True, null=True)),
                ('addOnScholar', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('sche_id', models.AutoField(primary_key=True, serialize=False)),
                ('titleSchedule', models.CharField(max_length=255)),
                ('dateSchedule', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='SourceOfScholarship',
            fields=[
                ('sourceofscho_id', models.AutoField(primary_key=True, serialize=False)),
                ('nameSrcScholar', models.CharField(blank=True, max_length=255, null=True)),
                ('tel', models.CharField(blank=True, max_length=20, null=True)),
                ('selectedDate', models.DateField()),
                ('detailAddr', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TestForeignKey',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('TestName', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': 'TestKey',
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('fullName', models.TextField()),
                ('address', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='User_Login',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('fullname', models.CharField(max_length=255, null=True)),
                ('role', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.CharField(blank=True, max_length=255, null=True)),
                ('access_token', models.TextField(blank=True, null=True)),
                ('refresh_token', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='AdminUser',
            fields=[
                ('Admin_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='app.user_login')),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('place', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='app.place')),
                ('serves_hot_dogs', models.BooleanField(default=False)),
                ('serves_pizza', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='StudentInform',
            fields=[
                ('stdInform_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='app.user_login')),
                ('image_Std', models.ImageField(blank=True, null=True, upload_to='image/')),
                ('fullName_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('birthDate_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('major_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('phone_Std', models.CharField(blank=True, max_length=10, null=True)),
                ('GPA_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('id_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('year_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('term_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('email_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('address_Std', models.TextField(blank=True, null=True)),
                ('advisor_Std', models.CharField(blank=True, max_length=100, null=True)),
                ('Father_Profile', models.TextField(blank=True, null=True)),
                ('Mother_Profile', models.TextField(blank=True, null=True)),
                ('Sibling_Profile', models.TextField(blank=True, null=True)),
                ('Other_Profile', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='StudentUser',
            fields=[
                ('std_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='app.user_login')),
            ],
        ),
        migrations.CreateModel(
            name='registerScholarShip',
            fields=[
                ('regischo_id', models.AutoField(primary_key=True, serialize=False)),
                ('nameScholarRegister', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='app.managescholarship')),
            ],
        ),
        migrations.AddField(
            model_name='managescholarship',
            name='srcScholar',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.sourceofscholarship', verbose_name='SOfScho'),
        ),
        migrations.CreateModel(
            name='Hero',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='image/')),
                ('File', models.FileField(blank=True, null=True, upload_to='file/')),
                ('TestFKey', models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET, to='app.testforeignkey', verbose_name='T1T2')),
            ],
        ),
    ]

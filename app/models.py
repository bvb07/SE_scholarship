from pickle import FALSE
from django.db import models
from django.conf import settings
from .UserModel import User_Login
from django.core.validators import FileExtensionValidator

import uuid

# Create your models here.
#ทุกครั้งที่สร้าง model ใหม่ ต้องใช้คำสั่ง เพื่อนำข้อมูลไปยัง sqlite database
#python manage.py makemigrations
#python manage.py migrate

class Hero(models.Model): #สร้าง database ชื่อว่า Hero
    id = models.BigAutoField(primary_key=True) #Primary_Key ควรเป็น id
    name = models.CharField(max_length=100) #field ชื่อ name ใส่เป็น character
    description = models.TextField() #field ชื่อ description ใส่เป็น text
    image = models.ImageField(upload_to = 'image/',null=True,blank=True)
    File = models.FileField(upload_to='file/',null=True,blank=True)
    TestFKey = models.ForeignKey('TestForeignKey',default=1 ,verbose_name=("T1T2"), on_delete=models.SET)

    def __str__(self):
        return self.name

class Topic(models.Model):
    id = models.BigAutoField(primary_key=True)
    fullName = models.TextField() # field ชื่่อ date ใส่เป็น date
    address = models.TextField() #field ชื่อ description ใส่เป็น text

    def __str__(self):
        return self.fullName

class TestForeignKey(models.Model): #test FK key
    id = models.AutoField(primary_key=True)
    TestName = models.CharField(max_length=100)
    
    class Meta:
        verbose_name_plural  = "TestKey"
    def __str__(self):
        return self.TestName

class StudentUser(models.Model):
    std_id = models.OneToOneField(User_Login,on_delete=models.CASCADE,primary_key=True)
    #Userid_std = models.OneToOneField('StudentInform', on_delete=models.CASCADE)

class AdminUser(models.Model):
    Admin_id = models.OneToOneField(User_Login,on_delete=models.CASCADE,primary_key=True)

class Place(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)

class Restaurant(models.Model):
    place = models.OneToOneField(
        Place,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    serves_hot_dogs = models.BooleanField(default=False)
    serves_pizza = models.BooleanField(default=False)

#============Student Profile Database===========================

class StudentInform(models.Model):
    #id = models.AutoField(primary_key=True) #ควรเปลี่ยน field
    stdInform_id = models.OneToOneField(User_Login,on_delete=models.CASCADE,primary_key=True)
    image_Std = models.ImageField(upload_to = 'image/',null=True,blank=True,validators=[FileExtensionValidator(['png','jpg'])])
    #image_Std = models.TextField(null=True,blank=True)
    fullName_Std = models.CharField(max_length=100,null=True,blank=True) 
    birthDate_Std = models.CharField(max_length=100,null=True,blank=True)
    major_Std = models.CharField(max_length=100,null=True,blank=True) #ควรเปลี่ยน field
    phone_Std = models.CharField(max_length=10,null=True,blank=True) 
    GPA_Std = models.CharField(max_length=100,null=True,blank=True)
    id_Std = models.CharField(max_length=100,null=True,blank=True) #ควรเปลี่ยน field
    year_Std = models.CharField(max_length=100,null=True,blank=True) #ควรเปลี่ยน field
    term_Std = models.CharField(max_length=100,null=True,blank=True) 
    email_Std = models.CharField(max_length=100,null=True,blank=True)
    address_Std = models.TextField(null=True,blank=True)
    advisor_Std = models.CharField(max_length=100,null=True,blank=True)
    #Father Student Inform
    Father_Profile = models.TextField(null=True,blank=True)
    # fullname_Father = models.CharField(max_length=255,null=False)
    # state_Father = models.CharField(max_length=255,null=False)
    # job_Father = models.CharField(max_length=255,null=False)
    # workplace_Father = models.CharField(max_length=255,null=False)
    # salary_Father = models.CharField(max_length=255,null=False) #ควรเปลี่ยน field
    # phone_Father = models.CharField(max_length=10,null=False)
    # address_Father = models.TextField(null=False)
    #Mother Student Inform
    Mother_Profile = models.TextField(null=True,blank=True)
    # fullname_Mother = models.CharField(max_length=255,null=False)
    # state_Mother = models.CharField(max_length=255,null=False)
    # job_Mother = models.CharField(max_length=255,null=False)
    # workplace_Mother = models.CharField(max_length=255,null=False)
    # salary_Mother = models.CharField(max_length=255,null=False) #ควรเปลี่ยน field
    # phone_Mother = models.CharField(max_length=10,null=False)
    # address_Mother = models.CharField(max_length=255,null=False)
    # mariage_Mother = models.CharField(max_length=255,null=False)
    # marrage_Seperate_Reason = models.CharField(max_length=100,null=True,blank=True)
    #Sibling and Parent
    Sibling_Profile = models.TextField(null=True,blank=True)
    #Other
    Other_Profile = models.TextField(null=True,blank=True)
    available_ID = models.BooleanField(default=False)
    def __str__(self):
        return self.id_Std
'''class registerScholarShip(models.Model):
    regischo_id = models.AutoField(primary_key=True)
    nameScholarRegister = models.ForeignKey('Managescholarship',default=1,on_delete=models.CASCADE)'''

#========Management Scholarship Database=============================
class Managescholarship(models.Model):
    managescho_id = models.AutoField(primary_key=True)
    srcUpload = models.ImageField(upload_to = 'image/',null=True,blank=True) 
    srcScholar = models.ForeignKey('SourceOfScholarship',verbose_name=("SOfScho"), on_delete=models.CASCADE)
    srcYear = models.ForeignKey('AcademicYear',default=1,verbose_name=("year"),on_delete=models.CASCADE)
    srcStartDate = models.DateField()
    srcEndDate = models.DateField()
    majorSelect =  models.TextField(null=True,blank=True)
    nameScholar = models.CharField(max_length=255,null=True,blank=True)
    costScholar = models.CharField(max_length=255,null=True,blank=True)
    amountScholar = models.CharField(max_length=255,null=True,blank=True)
    detailScholar = models.TextField(null=True,blank=True)
    qualificationScholar = models.TextField(null=True,blank=True)
    addOnScholar = models.TextField(null=True,blank=True) #
    statusScholar = models.CharField(max_length=255,null=True,blank=True)
    processStatus = models.CharField(max_length=255,null=True,blank=True)
    normalOrcontinue = models.CharField(max_length=255,null=True,blank=True) #new 6/4/22
    Round = models.IntegerField(default=1) #new 6/4/22

    def __str__(self):
        return self.nameScholar

class SourceOfScholarship(models.Model):
    sourceofscho_id = models.AutoField(primary_key=True)
    nameSrcScholar = models.CharField(max_length=255,null=True,blank=True)
    tel = models.CharField(max_length=20,null=True,blank=True)
    selectedDate = models.DateField()
    detailAddr = models.TextField(null=True,blank=True)
    def __str__(self):
        return self.nameSrcScholar

#===============Schedule================================
class Schedule(models.Model):
    sche_id = models.AutoField(primary_key=True)
    titleSchedule = models.CharField(max_length=255)
    dateSchedule = models.DateField()

    def __str__(self):
        return self.titleSchedule
    
class AcademicYear(models.Model):
    acayear_id = models.AutoField(primary_key=True)
    year = models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
            return self.year

class RegisterScholarship(models.Model):
    register_id = models.AutoField(primary_key=True)
    namescholarregister = models.ForeignKey('Managescholarship',default=1,on_delete=models.CASCADE)
    usermatch_id = models.ForeignKey('User_Login', default=1, on_delete=models.CASCADE)
    studentinform_profile = models.ForeignKey('StudentFile', default=1,on_delete=models.CASCADE)
    message = models.CharField(max_length=100,null=True,blank=True)
    totalScore = models.IntegerField(default=0,blank=True)
    statusCheck = models.CharField(max_length=100,null=True,blank=True)
    statusInterview = models.CharField(max_length=100,null=True,blank=True)
    statusTransfer = models.CharField(max_length=100,null=True,blank=True)
    statusReceipt = models.CharField(max_length=100,null=True,blank=True)
    statusRound = models.IntegerField(default=0,blank=True) #new 6/4/22

class StudentFile(models.Model):
    studentinform_profile_stdfile = models.AutoField(primary_key=True)
    stdinform_id = models.ForeignKey('StudentInform', default=1,on_delete=models.CASCADE)
    usermatch_id_stdfile = models.ForeignKey('User_Login',default=1,on_delete=models.CASCADE)
    profile_essay = models.FileField(upload_to='Profile_Essay/', null=True, blank=True,validators=[FileExtensionValidator(['pdf'])])
    national_id_card = models.FileField(upload_to='ID_card/', null=True, blank=True,validators=[FileExtensionValidator(['pdf'])])
    house_registration = models.FileField(upload_to='house_registration/', null=True, blank=True,validators=[FileExtensionValidator(['pdf'])])
    transcript = models.FileField(upload_to='Transcript/', null=True, blank=True,validators=[FileExtensionValidator(['pdf'])])
    checkFileFile = models.BooleanField(default=False)
    # filescholar_resume = models.FileField(upload_to='file/', null=True, blank=True)
    image_Std_reg = models.ImageField(upload_to = 'image/',null=True,blank=True)
    fullName_Std_reg = models.CharField(max_length=100,null=True,blank=True) 
    birthDate_Std_reg = models.CharField(max_length=100,null=True,blank=True)
    major_Std_reg = models.CharField(max_length=100,null=True,blank=True) #ควรเปลี่ยน field
    phone_Std_reg = models.CharField(max_length=10,null=True,blank=True) 
    GPA_Std_reg = models.CharField(max_length=100,null=True,blank=True)
    id_Std_reg = models.CharField(max_length=100,null=True,blank=True) #ควรเปลี่ยน field
    year_Std_reg = models.CharField(max_length=100,null=True,blank=True) #ควรเปลี่ยน field
    term_Std_reg = models.CharField(max_length=100,null=True,blank=True) 
    email_Std_reg = models.CharField(max_length=100,null=True,blank=True)
    address_Std_reg = models.TextField(null=True,blank=True)
    advisor_Std_reg = models.CharField(max_length=100,null=True,blank=True)
    Father_Profile_reg = models.TextField(null=True,blank=True)
    Mother_Profile_reg = models.TextField(null=True,blank=True)
    Sibling_Profile_reg = models.TextField(null=True,blank=True)
    Other_Profile_reg = models.TextField(null=True,blank=True)
    available_ID_reg = models.BooleanField(default=False)
    
class StudentFileFile(models.Model):
    file_id = models.ForeignKey('StudentFile', default=1,on_delete=models.CASCADE)
    fileTitle = models.CharField(max_length=255,null=True,blank=True)
    file = models.FileField(upload_to='file/', null=True, blank=True,validators=[FileExtensionValidator(['pdf','png','jpg','mp4'])])
    
class Weightcriteriapoint(models.Model):
    weight_id = models.AutoField(primary_key=True)
    managescho_id = models.ForeignKey('Managescholarship',default=1,on_delete=models.CASCADE)
    criterianame = models.CharField(max_length=255,null=True,blank=True)
    message = models.TextField(null=True,blank=True)
    weightpoint = models.IntegerField(null=True,blank=True)

class Commiteevote(models.Model):
    commitee_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey('User_Login', default=1, on_delete=models.CASCADE)
    managescholarship_id = models.ForeignKey('Managescholarship',default=1,on_delete=models.CASCADE)
    registerscholarship_id = models.ForeignKey('RegisterScholarship',default=1,on_delete=models.CASCADE)
    pointbycommitee = models.IntegerField(null=True,blank=True)
    sumpoint = models.TextField(null=True,blank=True)


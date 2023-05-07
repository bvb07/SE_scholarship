from rest_framework import serializers
from .models import (Hero,Topic,StudentInform,Managescholarship,
                SourceOfScholarship,Schedule,AcademicYear,StudentFile,RegisterScholarship,
                StudentFileFile,Weightcriteriapoint,Commiteevote)
from .UserModel import User_Login

class HeroSerializer(serializers.ModelSerializer): #serializers ใช้แปลง db เป็น JSON
    class Meta:
        fields = (
            'id',
            'name',
            'description',
            'image',
            'TestFKey',
        )
        model = Hero
        depth=1

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'fullName',
            'address',
        )
        model = Topic
        depth=1

class StudentInformSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            '__all__'
        )
        model = StudentInform
        depth=1

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            '__all__'
        )
        model = User_Login
        #depth=1
        
class SourceOfScholarshipSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            '__all__'
        )
        model = SourceOfScholarship

class ManagescholarshipSerializer(serializers.ModelSerializer):
    #sourceOfScho_ManageScho = SourceOfScholarshipSerializer()  
    class Meta:
        fields = (
            '__all__'
        )
        model = Managescholarship

class ScheduleSerializer(serializers.ModelSerializer):
    dateSchedule = serializers.DateField(format="%d/%m/%Y")
    class Meta:
        fields = (
            '__all__'
        )
        model = Schedule

class AcademicYearSerializers(serializers.ModelSerializer):
    class Meta:
        fields = (
            '__all__'
        )
        model = AcademicYear

class StudentFileSerializers(serializers.ModelSerializer):
    #profile_essay = serializers.FileField(max_length=None, use_url=True)
    class Meta:
        fields = (
            '__all__'
        )
        model = StudentFile
    

class StudentFileFileSerializers(serializers.ModelSerializer):
    class Meta:
        fields = (
            '__all__'
        )
        model = StudentFileFile
      
        
class RegisterScholarshipSerializers(serializers.ModelSerializer):
    class Meta:
        fields = (
            '__all__'
        )
        model = RegisterScholarship
        
class StudentCheckFileSerializers(serializers.ModelSerializer):
    class Meta:
        fields = (
            '__all__'
        )
        model = StudentFile
        
class queryStudentFileSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudentFileFile
        fields = (
            'file',
            'studentfile',
        )
        
class WeightcriteriapointSerializers(serializers.ModelSerializer):
    class Meta:
        model = Weightcriteriapoint
        fields = (
            '__all__'
        )
        
class CommiteevoteSerializers(serializers.ModelSerializer):
    class Meta:
        model = Commiteevote
        fields = (
            '__all__'
        )
        

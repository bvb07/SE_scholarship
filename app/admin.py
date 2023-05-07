from dataclasses import field
from django.contrib import admin

# Register your models here.
from .models import( Hero,Topic,TestForeignKey,StudentInform
                    ,StudentUser,AdminUser) #import model.py ของ class Hero
from .UserModel import User_Login

class HeroAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'description','image','File','TestFKey') # แสดงผลหน้าจอ database ของ Hero
    fieldsets = (
        ("Name", {"fields": ("name",)}),
        ("des",{"fields":("description","image","File")},),
        ("TestKey",{"fields":("TestFKey",)}),
    )
    
class TopicAdmin(admin.ModelAdmin):
    list_display = ('id','fullName','address')

class StudentInformAdmin(admin.ModelAdmin):
    list_display = ('stdInform_id','fullName_Std','birthDate_Std','major_Std',
    'phone_Std','GPA_Std','id_Std','year_Std','term_Std',
    'email_Std','advisor_Std')
    
    # list_display = ('id','image_Std','fullName_Std','birthDate_Std','major_Std',
    # 'phone_Std','GPA_Std','id_Std','year_Std','term_Std',
    # 'email_Std','advisor_Std')

class TestForeignKeyAdmin(admin.ModelAdmin): #admin fk key
    list_display = ('id','TestName')

class UserLoginAdmin(admin.ModelAdmin):
    list_display = ('user_id','role','email')

class StudentUserAdmin(admin.ModelAdmin):
    list_display = [field.name for field in StudentUser._meta.get_fields()]

'''class registerScholarShipAdmin(admin.ModelAdmin):
    list_display = [field.name for field in registerScholarShip._meta.get_fields()]'''

class AdminUserAdmin(admin.ModelAdmin):
    list_display = [field.name for field in AdminUser._meta.get_fields()]

admin.site.register(Hero, HeroAdmin) # regis ของ Hero ใน class HeroAdmin
admin.site.register(Topic,TopicAdmin) # regis ของ schedule ใน class scheduleAdmin
admin.site.register(TestForeignKey,TestForeignKeyAdmin)
admin.site.register(StudentInform,StudentInformAdmin)
admin.site.register(User_Login,UserLoginAdmin)
admin.site.register(StudentUser,StudentUserAdmin)
admin.site.register(AdminUser,AdminUserAdmin)

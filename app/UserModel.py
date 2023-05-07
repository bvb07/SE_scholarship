from django.db import models

class User_Login(models.Model):
    user_id = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=255,null=True)
    role = models.CharField(max_length=100,null=True,blank=True)
    email = models.CharField(max_length=255,null=True,blank=True)
    access_token = models.TextField(null=True,blank=True)
    refresh_token = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.fullname
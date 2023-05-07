import json
import os
from pickletools import read_unicodestring1
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from rest_framework import generics,viewsets
from .models import (Hero,Topic,StudentInform
                    ,Managescholarship,SourceOfScholarship,Schedule,AcademicYear
                    ,StudentFile,StudentFileFile,RegisterScholarship,Weightcriteriapoint,Commiteevote)
from .UserModel import User_Login

from django.conf.urls.static import static
from django.core import serializers
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import parser_classes ,action
from rest_framework.parsers import JSONParser,FileUploadParser
from rest_framework.permissions import IsAuthenticated
from .serializers import (HeroSerializer ,TopicSerializer
                ,StudentInformSerializer,UserLoginSerializer,ManagescholarshipSerializer,SourceOfScholarshipSerializer,
                ScheduleSerializer,AcademicYearSerializers,StudentFileSerializers,RegisterScholarshipSerializers,
                StudentFileFileSerializers,StudentCheckFileSerializers,queryStudentFileSerializers,WeightcriteriapointSerializers,
                CommiteevoteSerializers)

from django.views.decorators.clickjacking import xframe_options_exempt

@xframe_options_exempt
def ok_to_load_in_a_frame(request):
    return HttpResponse("This page is safe to load in a frame on any site.")
# Create your views here. มุมมอง
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "StudentCheckFileView": "http://127.0.0.1:8000/StudentCheckFileView/",
        "queryUserLoginRC":"http://127.0.0.1:8000/queryUserLoginRC/",
        "queryStudentFile":"http://127.0.0.1:8000/queryStudentFile/",
        "queryStudentOtherFile":"http://127.0.0.1:8000/queryStudentOtherFile",
        "Weightcriteriapoint":"http://127.0.0.1:8000/queryWeightManagescholarship",
        "queryStudentStatus":"http://127.0.0.1:8000/queryStudentStatus",
        "queryAdminShowStudentStatusAll":"http://127.0.0.1:8000/queryAdminshowstudentstatusall",
        "queryAdminShowStudentStatusSpecific":"http://127.0.0.1:8000/queryAdminshowstudentstatusspecific",
        "queryWeightcriteriapointToCommittee":"http://127.0.0.1:8000/queryWeightcriteriapointToCommittee",
        "queryStudentHistory":"http://127.0.0.1:8000/queryStudentHistory",
        "queryCommitteeWhoAlreadyVoted":"http://127.0.0.1:8000/queryCommitteeWhoAlreadyVoted",
        "queryRanking":"http://127.0.0.1:8000/queryRanking",
        "queryAverage":"http://127.0.0.1:8000/queryAverage"
    }
    return Response(api_urls)

@api_view(['POST'])
def UserLoginList(request):
    #sql = 'SELECT * from app_user_login where email="Sapol.m@ku.th"'
    serializer = UserLoginSerializer(data=request.data,context={'request': request})
    #email = request.POST.get(data=request.data)
    #print(email)
    #datab=request.body.decode('utf-8')
    #post = request.POST.copy()
    post = request.data
    #print(post['email'])
    filter_email = post['email']
    #role = post['role']
    #print(role)
    #data = json.loads()
    #queryset = User_Login.objects.all()
    db_sql = 'SELECT * from app_user_login where email= "%s"'%filter_email
    #print(db_sql.role)
    print(db_sql)
    for User_login_SQL in User_Login.objects.raw(db_sql):
        if (User_login_SQL.email == str(filter_email)) :
            print(User_login_SQL.role)
            db_Role = User_login_SQL.role
            db_acc = User_login_SQL.access_token
            db_ref = User_login_SQL.refresh_token
            list = {
                    "id":User_login_SQL.user_id,
                    "fullname": User_login_SQL.fullname,
                    "role": User_login_SQL.role,
                    "email": User_login_SQL.email,
                    "access_token": User_login_SQL.access_token,
                    "refresh_token": User_login_SQL.refresh_token
                }
            return Response(list,status=200)
        #print(User_login_SQL.id,User_login_SQL.role,type(User_login_SQL.email))
    #print(serializer)
    #print(queryset)
    #column_set = 1
    #db_sql_search_id = 'select * from app_user_login where student_ID and admin_ID and committee_ID'
    '''print(db_sql_search_id)
    for column in User_Login.objects.raw(db_sql_search_id):
        print(column_set)
        print(type(column.student_ID))
        if ((column.student_ID != column_set) and (column.admin_ID != column_set) and (column.committee_ID != column_set)):
            return Response(status=200)
        column_set += 1
    request.data["student_ID"] = column_set
    request.data["admin_ID"] = column_set
    request.data["committee_ID"] = column_set'''
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def queryUser(request):
    db_sql = 'SELECT A.fullname,A.user_id FROM app_user_login A ;' #where A.role = "User"
    fake_json = []
    i = 1
    for File in User_Login.objects.raw(db_sql):
        list = {
            "user_id":File.user_id,
            "fullname":File.fullname
        }
        fake_json.append(list)
        i += 1
    return Response(fake_json,status=200)
    

@api_view(['GET','POST'])
def queryUserLoginView(request):
    if request.method == 'GET':
        return Response('RC ส่งเป็น string POST EX= "test555" ',status=200)
    elif request.method == 'POST':
        post = request.data
        j = 1
        fake_json = []
        #print(type(post))
        for i in range(len(post)):
            db_sql = 'SELECT * FROM `app_user_login` where refresh_token = "%s";'%post[i]
            for File in User_Login.objects.raw(db_sql):
                list = {
                    "user_id":File.user_id,
                    "fullname":File.fullname,
                    "role":File.role,
                    "email":File.email,
                    "access_token":File.access_token,
                    "refresh_token":File.refresh_token
                }
                fake_json.append(list)
                return Response(fake_json,status=200)
        return Response(fake_json,status=200)
    
    
@api_view(['POST'])
def StudentCheckFileView(request):
    serializer = StudentFileSerializers(data=request.data)
    post = request.data
    
    stdinform_id = post['stdinform_id']#int(request.POST.get('stdinform_id'))
    checkFileFile = post['checkFileFile']#request.POST.get('checkFileFile',False)
    db_sql = 'select * from app_studentfile where stdinform_id_id = %d and checkFileFile = %s'%(stdinform_id,checkFileFile)
    #print(checkFileFile)
    #print(stdinform_id)
    #print(db_sql)
    for File in StudentFile.objects.raw(db_sql):
        if (File.checkFileFile == False):
            #print("yes")
            return Response(stdinform_id,status=200)
    return Response("True didn't send to database",status=200)
 
@api_view(['POST'])
def queryStudentFile(request):
    db_sql = 'SELECT `app_studentfilefile`.`id`, `app_studentfilefile`.`file_id_id`, `app_studentfilefile`.`fileTitle`, `app_studentfilefile`.`file`, `app_studentfile`.`studentinform_profile_stdfile`, `app_studentfile`.`stdinform_id_id`, `app_studentfile`.`usermatch_id_stdfile_id`, `app_studentfile`.`profile_essay`,`app_studentfile`.`national_id_card`, `app_studentfile`.`house_registration`, `app_studentfile`.`transcript`, `app_studentfile`.`checkFileFile` FROM `app_studentfilefile` INNER JOIN `app_studentfile` ON (`app_studentfilefile`.`file_id_id` = `app_studentfile`.`studentinform_profile_stdfile`)'
    queryset = StudentFileFile.objects.select_related('file_id')
    q2 = StudentFile.objects.raw(db_sql)
    #print(str(queryset.query))
    serializers = StudentFileSerializers(queryset)
    profile_picture_urls = [request.build_absolute_uri(app_studentfile.file.url) for app_studentfile in queryset]
    # print(profile_picture_urls)
    # print(q2)
    # for app_studentfile in queryset:
    #     print(request.build_absolute_uri(app_studentfile.file.url))
    # print(type(post))
    # print(type(post[0]))
    # print(post[0])
    post = request.data
    #print(post)
    #print(type(post))
    j = 1
    fake_json = []
    for i in range(len(post)):
        db_sql = 'select DISTINCT A.*,C.*,B.register_id,B.statusInterview,B.statusReceipt,B.statusTransfer,B.statusCheck,B.statusRound from app_studentfile A , app_studentinform C , app_registerscholarship B WHERE A.stdinform_id_id = C.stdInform_id_id and A.studentinform_profile_stdfile = B.studentinform_profile_id and A.studentinform_profile_stdfile = %d;'%post[i]
        
        if not StudentFile.objects.raw(db_sql):
            db_sql2 = 'SELECT * FROM app_studentfile A, app_studentinform C WHERE A.stdinform_id_id = C.stdInform_id_id and studentinform_profile_stdfile = %d;'%post[i]
            for File in StudentFile.objects.raw(db_sql2):
                imageProfile = StudentInform.objects.get(image_Std=File.image_Std)
                list = {
                        "query_id": j,
                        "studentinform_profile_stdfile":File.studentinform_profile_stdfile,
                        "profile_essay": request.build_absolute_uri(File.profile_essay.url),
                        "national_id_card": request.build_absolute_uri(File.national_id_card.url),
                        "house_registration": request.build_absolute_uri(File.house_registration.url),
                        "transcript": request.build_absolute_uri(File.transcript.url),
                        "checkFileFile": File.checkFileFile,
                        "stdinform_id": File.stdinform_id_id,
                        "usermatch_id_stdfile" : File.usermatch_id_stdfile_id,
                        "file" : None,
                        "image_Std": request.build_absolute_uri(imageProfile.image_Std.url),
                        "fullName_Std": File.fullName_Std_reg,
                        "birthDate_Std": File.birthDate_Std_reg,
                        "major_Std": File.major_Std_reg,
                        "phone_Std": File.phone_Std_reg,
                        "GPA_Std": File.GPA_Std_reg,
                        "id_Std": File.id_Std_reg,
                        "year_Std": File.year_Std_reg,
                        "term_Std": File.term_Std_reg,
                        "email_Std": File.email_Std_reg,
                        "address_Std": File.address_Std_reg,
                        "advisor_Std": File.advisor_Std_reg,
                        "Father_Profile": File.Father_Profile_reg,
                        "Mother_Profile": File.Mother_Profile_reg,
                        "Sibling_Profile": File.Sibling_Profile_reg,
                        "Other_Profile": File.Other_Profile_reg,
                        "available_ID": File.available_ID_reg,
                    }
                fake_json.append(list)
                #print(File.studentinform_profile_stdfile)
                j += 1
        else:
            for File in StudentFile.objects.raw(db_sql):
                db_sql3 = 'SELECT A.id,A.* FROM app_studentfilefile A where A.file_id_id=%d;'%post[i]
                temp_json = []
                k = 1
                for File2 in StudentFileFile.objects.raw(db_sql3):
                    otherfile = StudentFileFile.objects.get(file=File2.file)
                    list = {
                        "query_id": k,
                        "primary_id":File2.id,
                        "file": request.build_absolute_uri(otherfile.file.url),
                        "fileTitle": File2.fileTitle,
                    }
                    temp_json.append(list)
                    k += 1
                #print(File.studentinform_profile_stdfile)
                #print(post[i])
                #print(temp_json)
                image = StudentFile.objects.get(studentinform_profile_stdfile=File.studentinform_profile_stdfile)
                #otherfile = StudentFileFile.objects.get(file=File.file)
                imageProfile = StudentInform.objects.get(image_Std=File.image_Std)
                #print(imageProfile)
                #print(image.national_id_card.path)
                #print(File.national_id_card.url)
                #print(otherfile.file.url)
                list = {
                        "query_id": j,
                        "studentinform_profile_stdfile":File.studentinform_profile_stdfile,
                        "register_id":File.register_id,
                        "profile_essay": request.build_absolute_uri(File.profile_essay.url),
                        "national_id_card": request.build_absolute_uri(File.national_id_card.url),
                        "house_registration": request.build_absolute_uri(File.house_registration.url),
                        "transcript": request.build_absolute_uri(File.transcript.url),
                        "checkFileFile": File.checkFileFile,
                        "stdinform_id": File.stdinform_id_id,
                        "usermatch_id_stdfile" : File.usermatch_id_stdfile_id,
                        "file" : temp_json,
                        #"fileTitle": File.fileTitle,
                        #"file": request.build_absolute_uri(otherfile.file.url), # ใช้ raw ไม่ดึง url ให้ มองว่าเป็น string ต้อง get อีกรอบ
                        #"stdInform_id": File.stdInform_id,
                        "image_Std": request.build_absolute_uri(imageProfile.image_Std.url),
                        "fullName_Std": File.fullName_Std_reg,
                        "birthDate_Std": File.birthDate_Std_reg,
                        "major_Std": File.major_Std_reg,
                        "phone_Std": File.phone_Std_reg,
                        "GPA_Std": File.GPA_Std_reg,
                        "id_Std": File.id_Std_reg,
                        "year_Std": File.year_Std_reg,
                        "term_Std": File.term_Std_reg,
                        "email_Std": File.email_Std_reg,
                        "address_Std": File.address_Std_reg,
                        "advisor_Std": File.advisor_Std_reg,
                        "Father_Profile": File.Father_Profile_reg,
                        "Mother_Profile": File.Mother_Profile_reg,
                        "Sibling_Profile": File.Sibling_Profile_reg,
                        "Other_Profile": File.Other_Profile_reg,
                        "available_ID": File.available_ID_reg,
                        "statusCheck": File.statusCheck,
                        "statusReceipt": File.statusReceipt,
                        "statusInterview" : File.statusInterview,
                        "statusTransfer": File.statusTransfer
                    }
                fake_json.append(list)
                #print(File.studentinform_profile_stdfile)
                j += 1
    #print(fake_json)
    StudentFile1 = StudentFileFile.objects.select_related('file_id')
    #print(StudentFile1)
    #StudentFile2 = serializers.serialize('json',fake_json)
    return Response(fake_json,status=200)

@api_view(['POST'])
def queryStudentOtherFile(request):
    post = request.data
    fake_json = []
    j = 1
    for i in range(len(post)):
        db_sql = 'SELECT * from app_studentfilefile S where S.file_id_id =%d'%post[i]
        for File in StudentFileFile.objects.raw(db_sql):
            otherfile = StudentFileFile.objects.get(file=File.file)
            list = {
                "query_id": j,
                "file": request.build_absolute_uri(otherfile.file.url),
                "fileTitle": File.fileTitle,
            }
            fake_json.append(list)
            j += 1
    return Response(fake_json,status=200)

@api_view(['POST'])
def queryWeightManagescholarship(request):
    if request.method == 'GET':
        return Response("query สถานะเกณฑ์คะแนนโดยส่งข้อมูลเป็น array หลายตัว หรือ managescho_id_id POST method Ex:[9]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT D.*,B.statusScholar,B.processStatus FROM app_weightcriteriapoint D ,app_managescholarship B WHERE D.managescho_id_id = B.managescho_id and D.managescho_id_id = %d;'%post[i]
            for File in Weightcriteriapoint.objects.raw(db_sql):
                list = {
                    "query_id": j,
                    "criterianame": File.criterianame,
                    "message":File.message,
                    "weightpoint":File.weightpoint,
                    "managescho_id":File.managescho_id_id,
                    "weight_id":File.weight_id,
                    "statusScholar":File.statusScholar,
                    "processStatus":File.processStatus
                }
                fake_json.append(list)
                j += 1
        return Response(fake_json,status=200)

@api_view(['GET','POST'])
def queryStudentStatus(request):
    if request.method == 'GET':
        return Response("query สถานะนิสิตของแต่ละคนโดยส่งข้อมูลเป็น array ตัวเดียว ของ usermatch_id หรือ user_id POST method Ex:[5]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT DISTINCT A.* ,B.fullName_Std_reg ,B.id_Std_reg ,C.statusScholar,C.nameScholar,C.srcYear_id from app_registerscholarship A inner join app_studentfile B on A.usermatch_id_id = B.stdinform_id_id inner join app_managescholarship C on C.managescho_id = A.namescholarregister_id where B.stdinform_id_id = %d;'%post[i]
            for File in RegisterScholarship.objects.raw(db_sql):
                list = {
                    "query_id": j,
                    "register_id": File.register_id,
                    "namescholarregister": File.namescholarregister_id,
                    "usermatch_id": File.usermatch_id_id,
                    "studentinform_profile": File.studentinform_profile_id,
                    "message": File.message,
                    "statusCheck": File.statusCheck,
                    "statusInterview": File.statusInterview,
                    "statusTransfer": File.statusTransfer,
                    "statusReceipt": File.statusReceipt,
                    "fullName_Std_reg": File.fullName_Std_reg,
                    "id_Std_reg": File.id_Std_reg,
                    "nameScholar":File.nameScholar,
                    "srcYear":File.srcYear_id,
                    "statusScholar":File.statusScholar
                }
                fake_json.append(list)
                j += 1
        return Response(fake_json,status=200)

@api_view(['GET','POST'])
def queryAdminShowStudentStatusAll(request):
    if request.method == 'GET':
        return Response("query สถานะนิสิตของแต่ละคนโดยส่งข้อมูลเป็น array หลายตัวของ studentinform_profile_id  POST method Ex:[49]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT DISTINCT A.*,B.fullName_Std_reg,B.id_Std_reg,B.major_Std_reg from app_registerscholarship A inner join app_studentfile B on A.studentinform_profile_id=B.studentinform_profile_stdfile where A.studentinform_profile_id = %d;'%post[i]
            for File in RegisterScholarship.objects.raw(db_sql):
                list = {
                    "query_id": j,
                    "register_id": File.register_id,
                    "namescholarregister": File.namescholarregister_id,
                    "usermatch_id": File.usermatch_id_id,
                    "studentinform_profile": File.studentinform_profile_id,
                    "message": File.message,
                    "statusCheck": File.statusCheck,
                    "statusInterview": File.statusInterview,
                    "statusTransfer": File.statusTransfer,
                    "statusReceipt": File.statusReceipt,
                    "fullName_Std_reg": File.fullName_Std_reg,
                    "id_Std_reg": File.id_Std_reg,
                    "major_Std_reg":File.major_Std_reg,
                }
                j += 1
                fake_json.append(list)
        return Response(fake_json,status=200)

@api_view(['GET','POST'])
def queryCommitteeWhoAlreadyVoted(request):
    if request.method == 'GET':
        return Response("query แสดงกรรมการที่ได้ทำการให้คะแนนให้นิสิตคนนั้นไปแล้ว registerscholarship_id POST method Ex:[2100]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT * FROM app_commiteevote A WHERE A.registerscholarship_id_id = %d;'%post[i]
            for File in Commiteevote.objects.raw(db_sql):
                list = {
                    "query_id": j,
                    "commitee_id": File.commitee_id,
                    "managescholarship_id": File.managescholarship_id_id,
                    "user_id": File.user_id_id,
                    "registerscholarship_id": File.registerscholarship_id_id,
                    "pointbycommitee": File.pointbycommitee,
                    "sumpoint":File.sumpoint
                }
                j += 1
                fake_json.append(list)
        return Response(fake_json,status=200)

@api_view(['GET','POST'])
def queryRanking(request):
    if request.method == 'GET':
        return Response("query แสดงคะแนนนิสิตทั้งหมด namescholarregister_id POST method Ex:[10]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT A.stdInform_id_id,A.fullName_Std,A.id_Std,A.major_Std,B.register_id,B.totalScore \
                        FROM app_studentinform A, app_registerscholarship B \
                        WHERE A.stdInform_id_id = B.usermatch_id_id AND B.namescholarregister_id = %d ORDER BY B.totalScore DESC;'%post[i]
            for File in StudentInform.objects.raw(db_sql):
                list = {
                    "query_id": j,
                    "stdInform_id": File.stdInform_id_id,
                    "fullName_std": File.fullName_Std,
                    "id_Std": File.id_Std,
                    "major_Std": File.major_Std,
                    "register_id": File.register_id,
                    "totalScore": File.totalScore
                }
                j += 1
                fake_json.append(list)
        return Response(fake_json,status=200)

@api_view(['GET','POST'])
def queryAverage(request):
    if request.method == 'GET':
        return Response("query ค่าเฉลี่ย namescholarregister_id POST method Ex:[10]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT A.*,CAST(AVG(A.pointbycommitee) AS DECIMAL(10,2)) AS totalpoint \
                    FROM app_commiteevote A where registerscholarship_id_id = %d \
                    GROUP BY A.managescholarship_id_id,A.registerscholarship_id_id;'%post[i]
            for File in Commiteevote.objects.raw(db_sql):
                list = {
                    "query_id": j,
                    "commitee_id": File.commitee_id,
                    "managescholarship_id": File.managescholarship_id_id,
                    "user_id": File.user_id_id,
                    "registerscholarship_id": File.registerscholarship_id_id,
                    "pointbycommitee": File.pointbycommitee,
                    "sumpoint":File.sumpoint,
                    "average":File.totalpoint,
                }
                j += 1
                fake_json.append(list)
        return Response(fake_json,status=200)



@api_view(['GET','POST'])
def queryAdminShowStudentStatusSpecific(request):
    if request.method == 'GET':
        return Response("query สถานะนิสิตของแต่ละคนโดยส่งข้อมูลเป็น array หลายตัวของ register_id  POST method Ex:[2025]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT DISTINCT A.*,B.fullName_Std_reg,B.id_Std_reg,B.major_Std_reg,C.processStatus,C.nameScholar\
                        from app_registerscholarship A inner join app_studentfile B on A.studentinform_profile_id=B.studentinform_profile_stdfile \
                        inner join app_managescholarship C on A.namescholarregister_id=C.managescho_id \
                        where A.register_id = %d;'%post[i]
            for File in RegisterScholarship.objects.raw(db_sql):
                #print(type(File.namescholarregister_id))
                list = {
                    "query_id": j,
                    "register_id": File.register_id,
                    "namescholarregister": File.namescholarregister_id,
                    "usermatch_id": File.usermatch_id_id,
                    "studentinform_profile": File.studentinform_profile_id,
                    "message": File.message,
                    "statusCheck": File.statusCheck,
                    "statusInterview": File.statusInterview,
                    "statusTransfer": File.statusTransfer,
                    "statusReceipt": File.statusReceipt,
                    "fullName_Std_reg": File.fullName_Std_reg,
                    "id_Std_reg": File.id_Std_reg,
                    "major_Std_reg":File.major_Std_reg,
                    "processStatus":File.processStatus,
                    "nameScholar":File.nameScholar
                }
                j += 1
                fake_json.append(list)
        return Response(fake_json,status=200)
    
@api_view(['GET','POST'])   
def queryWeightcriteriapointToCommittee(request):
    if request.method == 'GET':
        return Response("query ของเกณฑ์คะแนนของทุนนั้นจากนิสิตที่ได้สมัครมาโดยส่งข้อมูลเป็น array หลายตัวของ register_id  POST method Ex:[2025]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT DISTINCT A.*,B.fullName_Std_reg,B.id_Std_reg,B.major_Std_reg,C.nameScholar,C.processStatus \
                        from app_registerscholarship A \
                        inner join app_studentfile B on A.studentinform_profile_id=B.studentinform_profile_stdfile \
                        inner join app_managescholarship C on A.namescholarregister_id = C.managescho_id \
                        where A.register_id = %d;'%post[i]
            for File in RegisterScholarship.objects.raw(db_sql):
                manage_id = File.namescholarregister_id
                db_sql2 = 'select B.* from app_managescholarship A , app_weightcriteriapoint B \
                    where A.managescho_id=B.managescho_id_id and A.managescho_id=%d;'%manage_id
                print(db_sql2)
                weightpoint_json = []
                k = 1
                for File2 in Weightcriteriapoint.objects.raw(db_sql2):
                    list2 = {
                        "query_id": k,
                        "weight_id":File2.weight_id,
                        "criterianame":File2.criterianame,
                        "message":File2.message,
                        "weightpoint":File2.weightpoint,
                        "managescho_id":File2.managescho_id_id
                    }
                    k +=1
                    weightpoint_json.append(list2)
                if weightpoint_json == []:
                    weightpoint_json = None
                #print(type(weightpoint_json))
                list = {
                    "query_id": j,
                    "register_id": File.register_id,
                    "namescholarregister": File.namescholarregister_id,
                    "weightpointlist":weightpoint_json,
                    "usermatch_id": File.usermatch_id_id,
                    "studentinform_profile": File.studentinform_profile_id,
                    "message": File.message,
                    "statusCheck": File.statusCheck,
                    "statusInterview": File.statusInterview,
                    "statusTransfer": File.statusTransfer,
                    "statusReceipt": File.statusReceipt,
                    "fullName_Std_reg": File.fullName_Std_reg,
                    "id_Std_reg": File.id_Std_reg,
                    "major_Std_reg":File.major_Std_reg,
                    "nameScholar":File.nameScholar,
                    "processStatus":File.processStatus
                }
                j += 1
                fake_json.append(list)
        return Response(fake_json,status=200)

@api_view(['GET','POST'])   
def queryStudentHistory(request):
    if request.method == 'GET':
        return Response("query ของประวัตินิสิตที่สมัครทุนอะไรไปบ้างโดยส่งข้อมูลเป็น array หลายตัวของ user_id  POST method Ex:[1]",status=200)
    elif request.method == 'POST':
        post = request.data
        fake_json = []
        j = 1
        for i in range(len(post)):
            db_sql = 'SELECT DISTINCT A.usermatch_id_id,B.stdInform_id_id,B.fullName_Std,B.id_Std,B.major_Std \
                        from app_registerscholarship A \
                        inner join app_studentinform B on A.usermatch_id_id=B.stdInform_id_id \
                        where A.usermatch_id_id = %d;'%post[i]
            for File in StudentInform.objects.raw(db_sql):
                user_id = File.stdInform_id_id
                db_sql2 = 'select B.*,A.nameScholar,A.costScholar,A.managescho_id,A.detailScholar \
                            from app_managescholarship A , app_registerscholarship B \
                            where A.managescho_id=B.namescholarregister_id and B.usermatch_id_id=%d;'%user_id
                #print(db_sql2)
                shcolarshiphistory_json = []
                k = 1
                for File2 in Managescholarship.objects.raw(db_sql2):
                    list2 = {
                        "query_id": k,
                        "managescho_id":File2.managescho_id,
                        "nameScholar":File2.nameScholar,
                        "detailScolar":File2.detailScholar,
                        "costScholar":File2.costScholar,
                        "statusCheck":File2.statusCheck,
                        "statusInterview":File2.statusInterview,
                        "statusReceipt":File2.statusReceipt,
                        "statusTransfer":File2.statusTransfer
                    }
                    k +=1
                    shcolarshiphistory_json.append(list2)
                if shcolarshiphistory_json == []:
                    shcolarshiphistory_json = None
                #print(type(shcolarshiphistory_json))
                list = {
                    "query_id": j,
                    "stdInform_id": File.stdInform_id_id,
                    "usermatch_id": File.usermatch_id_id,              
                    "fullName_Std": File.fullName_Std,
                    "id_Std": File.id_Std,
                    "major_Std":File.major_Std,
                    "shcolarshiplist":shcolarshiphistory_json
                }
                j += 1
                fake_json.append(list)
        return Response(fake_json,status=200)
    
'''@api_view(['PUT'])   
def postTotalScore(request):
    serializer = HeroSerializer(instance=queryset,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)'''
    
#=======================พื้นที่ Class CRUD (ทำแบบ advanced ไม่ได้ เพราะใช้เวลาศึกษานานเกินไป) =======================================\\\\
   
class Overview(viewsets.ViewSet):
    def list(self,request):
        list2 = {
            "StudentCheckFileView": "http://127.0.0.1:8000/StudentCheckFileView/",
            "queryUserLoginRC":"http://127.0.0.1:8000/queryUserLoginRC/",
            "queryStudentFile":"http://127.0.0.1:8000/queryStudentFile/",
            "queryStudentOtherFile":"http://127.0.0.1:8000/queryStudentOtherFile",
            "Weightcriteriapoint":"http://127.0.0.1:8000/queryWeightManagescholarship",
            "queryStudentStatus":"http://127.0.0.1:8000/queryStudentStatus",
            "queryAdminShowStudentStatusAll":"http://127.0.0.1:8000/queryAdminshowstudentstatusall",
            "queryAdminShowStudentStatusSpecific":"http://127.0.0.1:8000/queryAdminshowstudentstatusspecific",
            "queryWeightcriteriapointToCommittee":"http://127.0.0.1:8000/queryWeightcriteriapointToCommittee",
            "queryStudentHistory":"http://127.0.0.1:8000/queryStudentHistory",
            "queryUser":"http://127.0.0.1:8000/queryUser",
            "queryCommitteeWhoAlreadyVoted":"http://127.0.0.1:8000/queryCommitteeWhoAlreadyVoted"
        }
        return Response(list2,status=200)   

class postTotalScore(viewsets.ModelViewSet):
    queryset = Commiteevote.objects.all()
    serializer_class = CommiteevoteSerializers
    def update(self, request, *args, **kwargs):
        reg_set = self.get_object()
        data = request.data
        #print(data)
        #print(data["totalScore"])
        #reg_set.totalScore = 70
        reg_set.save()
        serializers = RegisterScholarshipSerializers(reg_set)
        return Response(serializers.data)
        
  
class querySetFile(viewsets.ModelViewSet):
    queryset = StudentFileFile.objects.select_related('file_id')
    serializer_class = queryStudentFileSerializers
    
class StudentFileView(viewsets.ModelViewSet):
    queryset = StudentFile.objects.all()
    serializer_class = StudentCheckFileSerializers
    '''def create(self, request, *args, **kwargs):
        serializer = StudentFileSerializers(data=request.data)
        post = request.data
        stdinform_id = int(request.POST.get('stdinform_id'))
        checkFileFile = request.POST.get('checkFileFile',False)
        db_sql = 'select * from app_studentfile where stdinform_id_id = %d and checkFileFile = %s'%(stdinform_id,checkFileFile)
        print(checkFileFile)
        print(stdinform_id)
        print(db_sql)
        for File in StudentFile.objects.raw(db_sql):
            if (File.checkFileFile == False):
                print("yes")
                return Response(stdinform_id,status=200)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)'''

class StudentFileFileView(viewsets.ModelViewSet):
    queryset = StudentFileFile.objects.all()
    serializer_class = StudentFileFileSerializers
    #parser_classes = [FileUploadParser]
    def create(self,request,*args, **kwargs):
        _serializer = StudentFileFileSerializers(data=request.data, context={'request': request})
        data = request.data
        images = data.getlist('file')

        # if no images call parent method it will return error
        if not images:
            return super().create(request, *args, **kwargs)
        print("Yes")
        # verify only without creating the images
        serializer_lst = []
        for image in images:
            data['file'] = image
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer_lst.append(serializer)
        #print(serializer_lst)    
        serializers_data = [] # this is to collect data for all created images and return as list in the response
        for serializer in serializer_lst:
            self.perform_create(serializer)
            serializers_data.append(serializer.data)
            headers = self.get_success_headers(serializer.data)
        return Response(serializers_data, status=201, headers=headers)
        '''if _serializer.is_valid():
            _serializer.save()
            return Response(data=_serializer.data)  # NOQA
        else:
            return Response(data=_serializer.errors)  # NOQA'''


    
class UserLoginView(viewsets.ModelViewSet):
    queryset = User_Login.objects.all()
    serializer_class = UserLoginSerializer
    def get_serializer_context(self, *args, **kwargs):
        print(self.request.method)
    def create(self,request):
        serializer = UserLoginSerializer(data=request.data)
        post = request.data
        #print(post['email'])
        filter_email = post['email']
        db_sql = 'SELECT * from app_user_login where email= "%s"'%filter_email
        #print(db_sql)
        for User_login_SQL in User_Login.objects.raw(db_sql):
            if (User_login_SQL.email == str(filter_email)) :
                print(User_login_SQL.role)
                db_Role = User_login_SQL.role
                return Response(db_Role,status=200)
            #print(User_login_SQL.id,User_login_SQL.role,type(User_login_SQL.email))
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class StudentInformView(viewsets.ModelViewSet):
    queryset = StudentInform.objects.all()
    serializer_class = StudentInformSerializer

class ManagescholarshipView(viewsets.ModelViewSet):
    queryset = Managescholarship.objects.all()
    serializer_class = ManagescholarshipSerializer

class SourceOfScholarshipView(viewsets.ModelViewSet):
    queryset = SourceOfScholarship.objects.all()
    serializer_class = SourceOfScholarshipSerializer

class ScheduleView(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

class AcademicYearView(viewsets.ModelViewSet):
    queryset = AcademicYear.objects.all()
    serializer_class = AcademicYearSerializers

class RegisterScholarshipView(viewsets.ModelViewSet):
    queryset = RegisterScholarship.objects.all()
    serializer_class = RegisterScholarshipSerializers
    
class WeightcriteriapointView(viewsets.ModelViewSet):
    queryset = Weightcriteriapoint.objects.all()
    serializer_class = WeightcriteriapointSerializers

class CommiteevoteView(viewsets.ModelViewSet):
    queryset = Commiteevote.objects.all()
    serializer_class = CommiteevoteSerializers

    

'''@api_view(['POST'])
def SendFile(request):
    if request.method == 'POST':
        resumefile = request.FILES.getlist('resumefile')

        for f in resumefile:
            StudentFile(filescholar_resume=f).save()'''

'''class StudentFileView(viewsets.ModelViewSet):
    queryset = StudentFile.objects.all()
    serializer_class = StudentFileSerializers  ''' 
    
'''
class ListStudentInform(generics.ListCreateAPIView):
    queryset = StudentInform.objects.all()
    serializer_class = StudentInformSerializer
    def get_serializer_class(self):
        return StudentInformSerializer

class DetialStudentInform(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudentInform.objects.all()
    serializer_class = StudentInformSerializer
    def get_serializer_class(self):
        return StudentInformSerializer

class ListManagescholarship(generics.ListCreateAPIView):
    queryset = Managescholarship.objects.all()
    serializer_class = ManagescholarshipSerializer
    def get_serializer_class(self):
        return ManagescholarshipSerializer

class DetialManagescholarship(generics.RetrieveUpdateDestroyAPIView):
    queryset = Managescholarship.objects.all()
    serializer_class = ManagescholarshipSerializer
    def get_serializer_class(self):
        return ManagescholarshipSerializer

class ListSourceOfScholarship(generics.ListCreateAPIView):
    queryset = SourceOfScholarship.objects.all()
    serializer_class = SourceOfScholarshipSerializer
    def get_serializer_class(self):
        return SourceOfScholarshipSerializer

class DetialSourceOfScholarship(generics.RetrieveUpdateDestroyAPIView):
    queryset = SourceOfScholarship.objects.all()
    serializer_class = SourceOfScholarshipSerializer
    def get_serializer_class(self):
        return SourceOfScholarshipSerializer
'''



  

#=============================================================================================
#ไม่ใช่ เป็นการทดสอบ ค่อยลบ code ทีหลัง
class ListHero(generics.ListCreateAPIView): #ใช้ generics ในการแสดงผล Views ของ ListHero
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    def get_serializer_class(self):
        return HeroSerializer
    
class DetailHero(generics.RetrieveUpdateDestroyAPIView): #ใช้ generics ในการแสดงผล Views ของ DetailHero
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    def get_serializer_class(self):
        return HeroSerializer

class ListTopic(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    def get_serializer_class(self):
        return TopicSerializer

class DetialTopic(generics.RetrieveUpdateDestroyAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    def get_serializer_class(self):
        return TopicSerializer

@api_view(['GET'])
def HeroList(request):
    queryset = Hero.objects.all()
    serializer = HeroSerializer(queryset,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def HeroDetail(request,pk):
    queryset = Hero.objects.filter(id=pk) #ต้องใช้ filter เพื่อทำซ้ำได้
    serializer = HeroSerializer(queryset,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def HeroCreate(request):
    serializer = HeroSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def HeroUpdate(request,pk):
    queryset = Hero.objects.get(id=pk)
    serializer = HeroSerializer(instance=queryset,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def HeroDelete(request,pk):
    queryset = Hero.objects.get(id=pk)
    queryset.delete()
    return Response("Item successfully delete")

@api_view(['GET','POST','DELETE'])
def Hero_List(request):
    if request.method == 'GET':
        queryset = Hero.objects.all()
        serializer = HeroSerializer(queryset,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = HeroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        queryset = Hero.objects.all()
        queryset.delete()
        return Response("[] Item successfully delete")

@api_view(['GET','PUT','DELETE'])
def Hero_Detail(request,pk):
    queryset = Hero.objects.filter(id=pk)
    if request.method == 'GET':
        serializer = HeroSerializer(queryset,many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = HeroSerializer(instance=queryset,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        queryset.delete()
        return Response("Item successfully delete")

@api_view(['GET'])
def TopicList(request):
    queryset = Topic.objects.all()
    serializer = TopicSerializer(queryset,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def TopicDetail(request,pk):
    queryset = Topic.objects.filter(id=pk) #ต้องใช้ filter เพื่อทำซ้ำได้
    serializer = TopicSerializer(queryset,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def TopicCreate(request):
    serializer = TopicSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def TopicUpdate(request,pk):
    queryset = Topic.objects.get(id=pk)
    serializer = TopicSerializer(instance=queryset,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def TopicDelete(request,pk):
    queryset = Topic.objects.get(id=pk)
    queryset.delete()
    return Response("Item successfully delete")
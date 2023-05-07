SE_scholarship

- Frontend  React
- backend  Django   
- Database MySQL 

# SE ScholarShip Group 5

### ภาษาที่ใช้งาน
Django <br>
Javascript <br>
React.js <br>

## Virtual Environment cmd
เข้าไปที่ Folder ของ SE เพื่อใช้งาน VEnv แล้วใช้คำสั่งเพื่อใช้งาน django
```/SE/Scripts/activate.bat``` <br>
## เปิดใช้งาน Backend ใน cmd
```python manage.py runserver``` <br>
## เปิดใช้งาน Frondend ใน cmd
```npm start``` <br><br><br>

# ในส่วนของ Backend library ที่ใช้งานของ python

## pip ที่ใช้งาน
```pip install django``` <br>
```pip install djangorestframework``` <br>
```pip install django-cors-headers``` <br>
```pip install mysqlclient``` <br>
```pip install pillow``` <br>
```pip install social-auth-app-django``` <br>
```pip install python-decouple``` <br>
```pip install drf-social-oauth2``` <br>
```pip install django-environ``` <br>
## เข้า env
```Scripts\activate``` <br>

## run server
```python manage.py runserver``` <br>

## สร้าง Folder พร้อม File Django
```python manage.py startapp <ชื่อแอพ>``` <br>

## ทุกครั้งที่สร้าง model ใหม่ต้องใช้คำสั่งนี้
```python manage.py makemigrations``` <br>
```python manage.py migrate``` <br>

## สร้าง Django superuser ในแต่ละ folder
```python manage.py createsuperuser``` <br> 

Username: (create a username) <br>
Email Address: (set a email) <br> 
Password: (set a password) <br>

### model.py ใช้เป็นตัวสร้าง database 


#### ใช้ serializers ในการติดต่อ frontend โดยการ Convert เป็น JSON 

#### Reference ในการแก้ไขปัญหา

```https://docs.djangoproject.com/en/4.0/ref/django-admin/#migrate``` <br>
##### ใ้ช้กรณีเกิด makemigrations แล้วถามหาไฟล์ไม่เจอ
ไปที่ backend/app/migrations แล้วลบทั้งหมด ยกเว้น ```__init.py``` <br>
ตามด้วยคำสั่งต่อไปนี้ <br>
```python manage.py makemigrations -n <ชื่อไฟล์>``` <br>
```python manage.py migrate``` <br>
##### ถ้าถามว่ามี table ซ้ำ 
ให้เข้า MySQL แล้ว DROP ที่มีคำนำหน้าว่า app ออกให้หมด <br><br><br>

# this is frontend

## ในส่วน Frontend
{M}------------------------------------------------- <br>
เมื่อจะใช้ useState//import { useState } from "react"; <br>
npm install --save react-hook-use-state  <br>
{M}------------------------------------------------- <br>
-เเก้ปัญหาpullมาไม่เจอmodule <br>
```npm install react-scripts --save``` <br>
```npm i styled-components``` <br>
-ตารางตั้ว <br>
```npm install react-data-table-component``` <br>

--calendar <br>
```npm install react-datepicker --save``` <br>
--{m} <br>

--ฺBoostrap 5 ของReact *** <br>
```npm install react-bootstrap bootstrap@5.1.3``` <br>


-กราฟ(ออย) <br>
```npm install --save @progress/kendo-react-charts @progress/kendo-drawing @progress/kendo-react-intl @progress/kendo-licensing hammerjs``` <br>
css กราฟ <br>
```npm install --save @progress/kendo-theme-default``` <br>
google login  <br>
```npm i react-google-login axios``` <br>



-icon fort <br>
```npm install --save @fortawesome/react-fontawesome``` <br>
```npm i react-file-viewer@0.5.0``` <br>


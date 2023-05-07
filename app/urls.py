from django.urls import path ,include 
from . import views 
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router2 = routers.SimpleRouter()
router.register('Managescholarship',views.ManagescholarshipView)
router.register('SourceOfScholarship',views.SourceOfScholarshipView)
router.register('Studentinform',views.StudentInformView)
router.register('UserLoginView',views.UserLoginView)
router.register('ScheduleView',views.ScheduleView)
router.register('AcademicYear',views.AcademicYearView)
router.register('StudentFileView',views.StudentFileView)
router.register('StudentFileFileView',views.StudentFileFileView)
router.register('RegisterScholarship',views.RegisterScholarshipView)
router.register('Weightcriteriapoint',views.WeightcriteriapointView)
router.register('Commiteevote',views.CommiteevoteView)
router.register('Overview',views.Overview,basename='test')
router.register('postTotalScore',views.postTotalScore,basename='postTotalScore')
#router.register('TutorialRegisterStudent',views.TutorialRegisterStudentView)
#router.register('StudentCheckFileView',views.querySetFile)
urlpatterns = [
    path('', include(router.urls)),
    path('e/',views.apiOverview),
    path('UserLoginList/',views.UserLoginList),
    path('queryUserLoginRC/',views.queryUserLoginView),
    path('StudentCheckFileView/',views.StudentCheckFileView),
    path('queryStudentFile/',views.queryStudentFile),
    path('queryStudentOtherFile',views.queryStudentOtherFile),
    path('queryWeightManagescholarship',views.queryWeightManagescholarship),
    path('queryStudentStatus',views.queryStudentStatus),
    path('queryAdminshowstudentstatusall',views.queryAdminShowStudentStatusAll),
    path('queryAdminshowstudentstatusspecific',views.queryAdminShowStudentStatusSpecific),
    path('queryWeightcriteriapointToCommittee',views.queryWeightcriteriapointToCommittee),
    path('queryStudentHistory',views.queryStudentHistory),
    path('queryUser/',views.queryUser),
    path('queryCommitteeWhoAlreadyVoted',views.queryCommitteeWhoAlreadyVoted),
    path('queryRanking',views.queryRanking),
    path('queryAverage',views.queryAverage)
    
]
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
#path('queryStudentFile2/',views.querySetFile),
'''path('SendFile/',views.SendFile)'''
'''urlpatterns = [
    path('Overview/',views.Overview.as_view()),
    
    path('',views.apiOverview,name='api-overview'),
    path('hero-list/',views.HeroList,name='hero_list'),
    path('hero-detail/<str:pk>/',views.HeroDetail,name='hero_detail'),
    path('hero-create/',views.HeroCreate,name='hero_create'),
    path('hero-update/<str:pk>/',views.HeroUpdate,name='hero_update'),
    path('hero-delete/<str:pk>/',views.HeroDelete,name='hero_delele'),
    path('topic-list/',views.TopicList,name='hero_list'),
    path('topic-detail/<str:pk>/',views.TopicDetail,name='hero_detail'),
    path('topic-create/',views.TopicCreate,name='hero_create'),
    path('topic-update/<str:pk>/',views.TopicUpdate,name='hero_update'),
    path('topic-delete/<str:pk>/',views.TopicDelete,name='hero_delele'),
    path('herolist',views.Hero_List),
    path('herolist/<str:pk>',views.Hero_Detail),
    path('UserLoginList/',views.UserLoginList),

    path('hero/', views.ListHero.as_view()),#สร้างเส้นทาง url ของ views.ListHero
    path('hero/<str:pk>', views.DetailHero.as_view()), #สร้างเส้นทาง url ของ views.DetailHero โดย สร้างเส้นทางเป็น primary key
    path('topic/',views.ListTopic.as_view()),
    path('topic/<str:pk>',views.DetialTopic.as_view()),
    path('Studentinform/',views.ListStudentInform.as_view()),
    path('Studentinform/<str:pk>',views.DetialStudentInform.as_view())
    
]
'''
'''
    path('hero/', views.ListHero.as_view()),#สร้างเส้นทาง url ของ views.ListHero
    path('hero/<int:pk>/', views.DetailHero.as_view()), #สร้างเส้นทาง url ของ views.DetailHero โดย สร้างเส้นทางเป็น primary key
    path('topic/',views.ListTopic.as_view()),
    path('topic/<int:pk>/',views.DetialTopic.as_view()),

    path('herolist/',views.Hero_List),
    path('herolist/<str:pk>/',views.Hero_Detail),
    '''

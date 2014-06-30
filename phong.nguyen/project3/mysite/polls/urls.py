from django.conf.urls import patterns, url

from polls import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^specifics/(?P<poll_id>\d+)/$', views.detail, name='detail'),
    url(r'^(?P<poll_id>\d+)/result/$',views.detail,name='result'),
    url(r'^(?P<poll_id>\d+)/vote/$',views.detail,name='vote'),
)
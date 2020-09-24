from django.conf import settings
from django.urls import include, path
from rest_framework import routers
from . import views
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register('videos', views.VideosViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('oldindex', views.index),
    path('videos_count', views.videos_count),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

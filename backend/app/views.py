from django.core.serializers import serialize
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Video
from .serializers import VideoSerializer
from rest_framework import viewsets, permissions
import time
from . import tasks


def index(request):
    videos = Video.objects.all()
    videos_as_json = serialize('json', videos)
    print(f'Videos: {videos}')
    return HttpResponse(videos_as_json)


def videos_count(request):
    task_result = tasks.num_videos.delay() 
    # NOTE: We're going to tell Django to sleep 2 seconds waiting for the result
    # See what happens if you comment this out.
    # We'll learn more about handling this later in the course.
    time.sleep(2)
    print(f'task_result: {task_result}')
    return HttpResponse(f'Task ready? {task_result.ready()} - Result: {task_result.result}')

class VideosViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [permissions.AllowAny]

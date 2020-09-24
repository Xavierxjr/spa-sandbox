"""
See https://docs.celeryproject.org/en/stable/django/first-steps-with-django.html
"""


from celery import shared_task
from app.models import Video
import time


@shared_task
def num_videos():
    # NOTE: What happens if you uncomment this line when other code depends on it?
    #time.sleep(5)
    return Video.objects.count()


@shared_task
def update_name(video_id, new_name):
    video = Video.objects.get(id=video_id)
    v.name = new_name
    v.save()
    return v

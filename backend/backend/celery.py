import os
from celery import Celery  #, shared_task
#from app.models import Video


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')


app = Celery('backend')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))

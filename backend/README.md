# Backend

```shell
python -m venv venv
venv\Scripts\activate  # or source venv/bin/activate on MacOS/Linux
pip install -r requirements.txt
python manage.py migrate
```

To run Django:

```shell
export CELERY_BROKER_URL=redis://localhost
export CELERY_RESULTS_BACKEND=redis://localhost
python manage.py runserver
```

To run celery (a separate application which loads tasks from celery_example.py):

```shell
export CELERY_BROKER_URL=redis://localhost
export CELERY_RESULTS_BACKEND=redis://localhost
celery --app celery_example worker --loglevel=info  # Run in a 2nd terminal
```

To run a task from a shell.
```shell
export CELERY_BROKER_URL=redis://localhost
export CELERY_RESULTS_BACKEND=redis://localhost
python manage.py shell
# Inside Python shell now
>>> from app import tasks
>>> r = tasks.num_videos.delay()  # Create a task for a celery worker.
>>> r.ready()  # Will return True shortly.
>>> r.result
```shell

## Remember to set these environment variables.

### Visit http://localhost:8000/videos_count to see celery in action results.

More celery examples at: https://github.com/celery/celery

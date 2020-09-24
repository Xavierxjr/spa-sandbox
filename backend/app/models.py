from django.db import models


class Video(models.Model):
    name = models.CharField(max_length=64)
    image = models.ImageField(null=True, blank=True)
    video = models.FileField(null=True, blank=True, upload_to='videos')

    def __str__(self):
        return f'Video: {self.name}'

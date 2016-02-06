from django.db import models


class User(models.Model):
    username = models.TextField()
    password = models.TextField()


class MappingUserPlace(models.Model):
    user = models.ForeignKey(User)
    place = models.ForeignKey('Place')


class Place(models.Model):
    name = models.TextField()
    description = models.TextField()
    preference = models.ManyToManyField(User, through=MappingUserPlace)

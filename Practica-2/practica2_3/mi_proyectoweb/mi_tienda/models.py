from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

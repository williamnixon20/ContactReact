from django.db import models
from phone_field import PhoneField

# Create your models here.


class Contact(models.Model):
    name = models.TextField()
    number = PhoneField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name[0:10]

from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class Product(models.Model):
    ProductId = models.IntegerField("Product Id",default=-1)
    ProductName = models.CharField("Product Name", max_length=255)
    UserId =  models.ForeignKey(User, on_delete=models.CASCADE,default=-1)
    CreatedAt = models.DateTimeField("Created At", auto_now_add=True)
    ExpiredAt = models.DateTimeField("Expired At", default=datetime(3000,1,1,0,0,0))

    def __str__(self):
        return self.ProductName
    
    
class QualityType(models.Model):
    QualityTypeId = models.IntegerField("Quality Type Id",default=-1)
    UserId =  models.ForeignKey(User, on_delete=models.CASCADE,default=-1)
    Length = models.IntegerField("Length")
    Mic = models.IntegerField("MIC")
    Trash = models.IntegerField("Trash")
    Rd = models.IntegerField("RD")
    Grade = models.CharField("Grade", max_length=255)
    CreatedAt = models.DateTimeField("Created At", auto_now_add=True)
    ExpiredAt = models.DateTimeField("Expired At", default=datetime(3000,1,1,0,0,0))



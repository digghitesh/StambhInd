from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class Customer(models.Model):
    CustomerId = models.IntegerField("Customer Id",default=-1)
#     CustomerType = models.ForeignKey(CustomerType,to_field="CustomerTypeId", db_column="CustomerTypeId",on_delete=models.CASCADE)
#     Product = models.ForeignKey(Product,to_field="ProductId", db_column="ProductId",on_delete=models.CASCADE)
    CustomerTypeId = models.IntegerField("CustomerType Id",default=-1)
    ProductId = models.IntegerField("Product Id",default=-1)
    FirstName = models.CharField("First Name", max_length=255)
    MiddleName = models.CharField("Middle Name", max_length=255,blank=True)
    LastName = models.CharField("Last Name", max_length=255)
    GstOrPanNo = models.CharField("GST or PAN Number", max_length=255)
    Address = models.CharField("Address", max_length=255)
    EmailId = models.CharField("Email Id", max_length=255)
    MobileNo = models.BigIntegerField("Mobile Number")
    UserId =  models.ForeignKey(User, on_delete=models.CASCADE,default=-1)
    CreatedAt = models.DateTimeField("Created At", auto_now_add=True)
    ExpiredAt = models.DateTimeField("Expired At",default=datetime(3000,1,1,0,0,0))
'''
Created on 25-May-2019

@author: hitesh
'''
        
from rest_framework import serializers
from .models import Customer
from django.contrib.auth.models import User

class CustomerSerializer(serializers.ModelSerializer):
    
    UserId = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    
    UserName = serializers.ReadOnlyField(source='UserId.first_name')
       
    class Meta:
        model = Customer
        fields = ('id','CustomerId','CustomerTypeId','ProductId','FirstName','MiddleName','LastName','GstOrPanNo','Address','EmailId','MobileNo','CreatedAt','ExpiredAt','UserId','UserName')
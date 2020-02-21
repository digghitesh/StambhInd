'''
Created on 25-May-2019

@author: hitesh
'''

from rest_framework import serializers
from .models import Product,QualityType
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):
    
    UserId = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    
    UserName = serializers.ReadOnlyField(source='UserId.first_name')
       
    class Meta:
        model = Product
        fields = ('id','ProductId','ProductName','CreatedAt','ExpiredAt','UserId','UserName')
    


class QualityTypeSerializer(serializers.ModelSerializer):
    
    UserId = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    
    class Meta:
        model = QualityType
        fields = '__all__'
        
        
        
        
        
        
        
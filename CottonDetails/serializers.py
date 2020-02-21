'''
Created on 25-May-2019

@author: hitesh
'''
        
from rest_framework import serializers
from .models import CottonDetails
from django.contrib.auth.models import User
from Customer.models import Customer
from Customer.serializers import CustomerSerializer

class CottonDetailsSerializer(serializers.ModelSerializer):
    
    UserId = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    
    UserName = serializers.ReadOnlyField(source='UserId.first_name')
    
    Broker = serializers.PrimaryKeyRelatedField(
        queryset=Customer.objects.all()
    )
     
    BrokerName = serializers.ReadOnlyField(source='Broker.FirstName')

    class Meta:
        model = CottonDetails
        fields = ('id','CottonDetailsId','SerialNo','VehicleNo','BuyDate','Village','Vyapari',
                  'Broker','GrossWeight','EmptyVehicleWeight','Kanta','Moisture',
                  'UtaraSample','UtaraGeneral','Utara3','RatePerKg','Vatav','Girai',
                  'PaymentStatus','Advance','TruckTarrif','LumpsumAmountPaid','PaymentDate','CreatedAt','ExpiredAt', 
                  'UserId','UserName','BrokerName')
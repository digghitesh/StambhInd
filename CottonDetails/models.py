from django.db import models
from Customer.models import Customer
from django.contrib.auth.models import User
from datetime import datetime
from Common.Utils import PaymentStatus  

class CottonDetails(models.Model):
    CottonDetailsId = models.IntegerField("CottonDetails Id",default=-1)
    SerialNo = models.CharField("Serial No", max_length=255)
    VehicleNo = models.CharField("Vehicle No", max_length=255)
    BuyDate = models.DateField("Buy Date")
    Village = models.CharField("Village", max_length=255)
    Vyapari = models.CharField("Vyapari", max_length=255)
    Broker = models.ForeignKey(Customer,on_delete=models.CASCADE)
#     BrokerId = models.IntegerField("Broker Id",default=-1)
    GrossWeight = models.IntegerField("Gross Weight")
    EmptyVehicleWeight = models.IntegerField("Empty Vehicle Weight")
   # CottonWeight = models.IntegerField("CottonDetails Weight")
    Kanta = models.IntegerField("Kanta")
    Moisture = models.IntegerField("Moisture")
   # NetWeight = models.IntegerField("NetWeight")
    UtaraSample = models.FloatField("UtaraSample")
    UtaraGeneral = models.FloatField("UtaraGeneral")
    Utara3 = models.FloatField("Utara3")
   # FinalUtara = models.FloatField("FinalUtara")
    RatePerKg = models.IntegerField("RatePerKg")
    Vatav = models.IntegerField("Vatav")
    Girai = models.IntegerField("Girai")
   # FinalRatePerKg = models.IntegerField("FinalRatePerKg")
    PaymentStatus = models.CharField("Payment Status", max_length=255,default=PaymentStatus.Pending.name)
    Advance = models.FloatField("Advance",default=0.0)
    TruckTarrif = models.FloatField("Truck Tarrif",default=0.0)
    LumpsumAmountPaid = models.FloatField("Lumpsum Amount Paid",default=0.0)
    BalanceAmount = models.FloatField("Balance Amount to be Paid",default=0.0)
    PaymentDate = models.DateField("Payment Date",auto_now_add=True)
    
    UserId =  models.ForeignKey(User, on_delete=models.CASCADE,default=-1)
    CreatedAt = models.DateTimeField("Created At", auto_now_add=True)
    ExpiredAt = models.DateTimeField("Expired At",default=datetime(3000,1,1,0,0,0))
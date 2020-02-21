from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Customer
from .serializers import CustomerSerializer
from datetime import datetime 
from django.db.models import Max
import traceback

# Create your views here.


@api_view(['GET', 'POST'])
def getCustomerList(request):
    
    try:
        if request.data.get("CustomerId"):
            customer = Customer.objects.filter(CustomerId=int(request.data["CustomerId"]),ExpiredAt = datetime(3000,1,1))
        elif request.data.get("CustomerTypeId"):
            customer = Customer.objects.filter(CustomerTypeId=int(request.data["CustomerTypeId"]),ExpiredAt = datetime(3000,1,1))
        elif request.data.get("CustomerName"):
            customer = Customer.objects.filter(string__contains=request.data["CustomerName"])
        elif request.data.get("Action")=='All':
            customer = Customer.objects.all()
        else:
            customer = Customer.objects.filter(ExpiredAt = datetime(3000,1,1))
        
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = CustomerSerializer(customer,context={'request': request},many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def addCustomer(request):
    
    newCustomerId = Customer.objects.aggregate(Max('CustomerId'))
    
    request.data['CustomerId'] = (newCustomerId["CustomerId__max"] or 0 ) + 1
    
    serializer = CustomerSerializer(data=request.data)
    try:
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({"data": "Customer added successfully"}, status=status.HTTP_201_CREATED)
    except  Exception:
        traceback.print_exc()
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def updateCustomer(request):
    try:

        Customer.objects.filter(CustomerId=int(request.data["CustomerId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
               
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CustomerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        
        return Response({"data": "Customer Updated successfully"},status=status.HTTP_205_RESET_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def deleteCustomer(request):
    try:
        Customer.objects.filter(CustomerId=int(request.data["CustomerId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
    except Customer.DoesNotExist:
        return Response({"data": "Customer Not Found"},status=status.HTTP_404_NOT_FOUND)
    
    return Response({"data": "Customer deleted successfully"},status=status.HTTP_204_NO_CONTENT)


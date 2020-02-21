from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import CottonDetails
from .serializers import CottonDetailsSerializer
from datetime import datetime 
from django.db.models import Max
import traceback

# Create your views here.


@api_view(['GET', 'POST'])
def getCottonList(request):
    
    try:
        if request.data.get("CottonDetailsId"):
            customer = CottonDetails.objects.filter(CottonDetailsId=int(request.data["CottonDetailsId"]),ExpiredAt = datetime(3000,1,1))
        elif request.data.get("Action")=='All':
            customer = CottonDetails.objects.all()
        else:
            customer = CottonDetails.objects.filter(ExpiredAt = datetime(3000,1,1))
        
    except CottonDetails.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = CottonDetailsSerializer(customer,context={'request': request},many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def addCotton(request):
    
    buyDate  = datetime.strptime(request.data['BuyDate'], '%Y-%m-%d').date()
    
    newCustomerId = CottonDetails.objects.aggregate(Max('CottonDetailsId'))
    
    request.data['CottonDetailsId'] = (newCustomerId["CottonDetailsId__max"] or 0 ) + 1
    
    request.data['SerialNo'] = "{}_{}_{}".format(buyDate.year, buyDate.month, request.data['CottonDetailsId'])
    
    
    serializer = CottonDetailsSerializer(data=request.data)
    try:
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({"data": "CottonDetails added successfully"}, status=status.HTTP_201_CREATED)
    except  Exception as e:
        traceback.print_exc()
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def updateCotton(request):
    try:

        CottonDetails.objects.filter(CottonDetailsId=int(request.data["CottonDetailsId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
               
    except CottonDetails.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CottonDetailsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        
        return Response({"data": "CottonDetails Updated successfully"},status=status.HTTP_205_RESET_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def deleteCotton(request):
    try:
        CottonDetails.objects.filter(CottonDetailsId=int(request.data["CottonDetailsId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
    except CottonDetails.DoesNotExist:
        return Response({"data": "CottonDetails Not Found"},status=status.HTTP_404_NOT_FOUND)
    
    return Response({"data": "CottonDetails deleted successfully"},status=status.HTTP_204_NO_CONTENT)


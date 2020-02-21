from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Product,QualityType
from .serializers import ProductSerializer,QualityTypeSerializer
from datetime import datetime 
from django.db.models import Max


@api_view(['GET', 'POST'])
def getQualityTypeList(request):
    
    try:
        if request.data.get("QualityTypeId"):
            qualityType = QualityType.objects.filter(QualityTypeId=int(request.data["QualityTypeId"]),ExpiredAt = datetime(3000,1,1))
        elif request.data.get("Action")=='All':
            qualityType = QualityType.objects.all()
        else:
            qualityType = QualityType.objects.filter(ExpiredAt = datetime(3000,1,1))
        
    except QualityType.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = QualityTypeSerializer(qualityType,context={'request': request},many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def addQualityType(request):
    
    newQualityTypeId = QualityType.objects.aggregate(Max('QualityTypeId'))
    
    request.data['QualityTypeId'] = (newQualityTypeId.get("QualityTypeId__max") or 0 ) + 1
    
    serializer = QualityTypeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"data": "QualityType added successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def updateQualityType(request):
    try:

        QualityType.objects.filter(QualityTypeId=int(request.data["QualityTypeId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
               
    except QualityType.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = QualityTypeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        
        return Response({"data": "QualityType Updated successfully"},status=status.HTTP_205_RESET_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def deleteQualityType(request):
    try:
        QualityType.objects.filter(QualityTypeId=int(request.data["QualityTypeId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
    except QualityType.DoesNotExist:
        return Response({"data": "QualityType Not Found"},status=status.HTTP_404_NOT_FOUND)
    
    return Response({"data": "QualityType deleted successfully"},status=status.HTTP_204_NO_CONTENT)
    

########Product Details


@api_view(['GET', 'POST'])
def getProductList(request):
    
    try:
        if request.data.get("ProductId"):
            product = Product.objects.filter(ProductId=int(request.data["ProductId"]),ExpiredAt = datetime(3000,1,1))
        elif request.data.get("ProductName"):
            product = Product.objects.filter(ProductName__icontains=request.data["ProductName"])
        elif request.data.get("Action")=='All':
            product = Product.objects.all()
        else:
            product = Product.objects.filter(ExpiredAt = datetime(3000,1,1))
        
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ProductSerializer(product,context={'request': request},many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def addProduct(request):
    
    newProductId = Product.objects.aggregate(Max('ProductId'))
    
    request.data['ProductId'] = (newProductId["ProductId__max"] or 0)  + 1
    
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"data": "Product added successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def updateProduct(request):
    try:

        Product.objects.filter(ProductId=int(request.data["ProductId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
               
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        
        return Response({"data": "Product Updated successfully"},status=status.HTTP_205_RESET_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def deleteProduct(request):
    try:
        Product.objects.filter(ProductId=int(request.data["ProductId"]),ExpiredAt = datetime(3000,1,1)).update(ExpiredAt = datetime.now())
    except Product.DoesNotExist:
        return Response({"data": "Product Not Found"},status=status.HTTP_404_NOT_FOUND)
    
#     product.delete()
    return Response({"data": "Product deleted successfully"},status=status.HTTP_204_NO_CONTENT)


        

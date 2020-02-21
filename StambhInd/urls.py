"""StambhInd URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
# from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
from MasterInfo import views as masterinfo
from CottonDetails import views as cottondetails
from Customer import views as customer
from Login import views as login
from django.conf.urls import url

from django.conf import settings
admin.site.site_header = settings.ADMIN_SITE_HEADER

urlpatterns = [
    path('admin/', admin.site.urls),
#     path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    url('login', login.validateUser),
    url(r'^api/product/add', masterinfo.addProduct),
    url(r'^api/product/update', masterinfo.updateProduct),
    url(r'^api/product/delete', masterinfo.deleteProduct),
    url(r'^api/product/get', masterinfo.getProductList),
    
    url(r'^api/cottondetails/add', cottondetails.addCotton),
    url(r'^api/cottondetails/update', cottondetails.updateCotton),
    url(r'^api/cottondetails/delete', cottondetails.deleteCotton),
    url(r'^api/cottondetails/get', cottondetails.getCottonList),
    
    url(r'^api/qualitytype/add', masterinfo.addQualityType),
    url(r'^api/qualitytype/update', masterinfo.updateQualityType),
    url(r'^api/qualitytype/delete', masterinfo.deleteQualityType),
    url(r'^api/qualitytype/get', masterinfo.getQualityTypeList),
    
    url(r'^api/customer/add', customer.addCustomer),
    url(r'^api/customer/update', customer.updateCustomer),
    url(r'^api/customer/delete', customer.deleteCustomer),
    url(r'^api/customer/get', customer.getCustomerList),
]

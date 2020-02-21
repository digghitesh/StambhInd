from django.contrib import admin



from .models import Product,QualityType

admin.site.register(Product)
admin.site.register(QualityType)

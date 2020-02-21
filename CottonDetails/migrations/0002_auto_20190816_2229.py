# Generated by Django 2.2.1 on 2019-08-16 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CottonDetails', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cottondetails',
            name='Advance',
            field=models.FloatField(default=0.0, verbose_name='Advance'),
        ),
        migrations.AlterField(
            model_name='cottondetails',
            name='LumpsumAmountPaid',
            field=models.FloatField(default=0.0, verbose_name='Lumpsum Amount Paid'),
        ),
        migrations.AlterField(
            model_name='cottondetails',
            name='PaymentDate',
            field=models.DateField(blank=True, verbose_name='Payment Date'),
        ),
        migrations.AlterField(
            model_name='cottondetails',
            name='TruckTarrif',
            field=models.FloatField(default=0.0, verbose_name='Truck Tarrif'),
        ),
    ]
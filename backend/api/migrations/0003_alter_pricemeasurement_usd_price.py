# Generated by Django 4.1.1 on 2022-09-23 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_pricemeasurement_usd_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pricemeasurement',
            name='usd_price',
            field=models.DecimalField(decimal_places=17, max_digits=22),
        ),
    ]
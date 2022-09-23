from django.contrib import admin

from .models import PriceMeasurement, Tweet

admin.site.register(PriceMeasurement)
admin.site.register(Tweet)

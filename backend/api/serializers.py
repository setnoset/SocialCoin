from rest_framework import serializers

from .models import PriceMeasurement, Tweet

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'datetime',
            'usd_price'
        )
        model = PriceMeasurement

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'datetime',
            'username',
            'content'
        )
        model = Tweet

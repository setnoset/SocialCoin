from rest_framework import generics

from .models import PriceMeasurement, Tweet
from .serializers import PriceSerializer, TweetSerializer

class PriceList(generics.ListAPIView):
    queryset = PriceMeasurement.objects.all()
    serializer_class = PriceSerializer

class TweetList(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

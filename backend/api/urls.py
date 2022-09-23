from django.urls import path

from .views import PriceList, TweetList

urlpatterns = [
    path('prices', PriceList.as_view()),
    path('tweets', TweetList.as_view())
]

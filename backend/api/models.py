from django.db import models

class PriceMeasurement(models.Model):
    datetime = models.DateTimeField()
    usd_price = models.DecimalField(max_digits=22, decimal_places=17)

    def __str__(self):
        return str(self.datetime.date())

class Tweet(models.Model):
    id = models.BigIntegerField(primary_key=True)
    datetime = models.DateTimeField()
    username = models.CharField(max_length=50)
    content = models.CharField(max_length=500)

    def __str__(self):
        return str(self.content)

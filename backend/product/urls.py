from django.urls import path

from . import views

app_name = "product"


urlpatterns = [
    path("scrape/", views.ProductScrapeAPIView.as_view(), name="scrape"),
    path("list/", views.ProductListAPIView.as_view(), name="list"),
]

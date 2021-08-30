from typing import TYPE_CHECKING

from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response

from .serializers import ProductLinkInputSerializer, ProductSerializer
from .utils import create_product_with_url
from .models import Product


if TYPE_CHECKING:
    from django.http import HttpRequest


class ProductScrapeAPIView(GenericAPIView):
    serializer_class = ProductLinkInputSerializer

    def post(self, request: "HttpRequest", *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        url = serializer.validated_data.get("url")

        product = create_product_with_url(url)

        return Response({"message": "created", "product_id": product.id})


class ProductListAPIView(ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

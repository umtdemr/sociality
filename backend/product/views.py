from typing import TYPE_CHECKING
from rest_framework import serializers

from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .serializers import ProductLinkInputSerializer


if TYPE_CHECKING:
    from django.http import HttpRequest


class ProductScrapeAPIView(GenericAPIView):
    serializer_class = ProductLinkInputSerializer

    def post(self, request: "HttpRequest", *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        url = serializer.validated_data.get("url")

        return Response({"message": "ok"})

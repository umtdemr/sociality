from rest_framework import serializers

from .models import Product


class ProductLinkInputSerializer(serializers.Serializer):
    url = serializers.URLField()


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

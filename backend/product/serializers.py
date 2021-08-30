from rest_framework import serializers


class ProductLinkInputSerializer(serializers.Serializer):
    url = serializers.URLField()

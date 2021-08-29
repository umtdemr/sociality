from django.db import models
from django.utils.translation import ugettext_lazy as _


class Product(models.Model):
    """
    A model for storing product data that scraped from the source.
    """

    name = models.CharField(
        _("Product Name"),
        max_length=255,
    )
    image_link = models.URLField(
        _("Product Image Link"),
    )
    price = models.PositiveIntegerField(_("Product Price"))

    class Meta:
        indexes = [models.Index(fields=["name"], name="product_name_idx")]

    def __str__(self):
        return self.name

    def __repr__(self) -> str:
        return f"<Product {self.id} {self.name}>"

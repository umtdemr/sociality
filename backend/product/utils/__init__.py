from django.utils.translation import ugettext_lazy as _

from rest_framework.exceptions import ValidationError

from product.models import Product
from product.utils.scraping import scrape_content


def create_product_with_url(url: str) -> Product:
    try:
        product_data = scrape_content(url)
        return Product.objects.create(**product_data.__dict__)

    except Exception as e:
        raise ValidationError(_("Error: %s" % (e)))

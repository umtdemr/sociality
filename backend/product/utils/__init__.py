from rest_framework.exceptions import ValidationError

from product.models import Product
from product.utils.scraping import scrape_content


def create_product_with_url(url: str) -> Product:
    product_data = scrape_content(url)
    print(product_data)

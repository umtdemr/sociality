import re
from typing import TYPE_CHECKING

from product import ProductData
from product.utils.request import get_content_sync


if TYPE_CHECKING:
    from bs4 import BeautifulSoup


def scrape_content(url: str):
    soup = get_content_sync(url)
    image_link = _scrape_img(soup)
    name = _scrape_name(soup)
    price_text = _scrape_price(soup)
    return ProductData(image_link, name, price_text)


def _scrape_img(soup: "BeautifulSoup") -> str:
    image = soup.find("img", class_="carousel-image")
    return image["src"]


def _scrape_name(soup: "BeautifulSoup") -> str:
    name = soup.find("h1")
    return name.text.strip()


def _scrape_price(soup: "BeautifulSoup") -> str:
    price = soup.find("p", class_="wt-text-title-03")
    return _clean_product_price(price.text.strip())


def _clean_product_price(price: str) -> str:
    splitted_price = re.split("Price:", price)
    if len(splitted_price) == 2:
        return splitted_price[1].strip()
    return price

from typing import TYPE_CHECKING

from product import ProductData
from product.utils.request import get_url_with_soup


if TYPE_CHECKING:
    from bs4 import BeautifulSoup


def scrape_content(url):
    soup = get_url_with_soup(url)
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
    return price.text.strip()

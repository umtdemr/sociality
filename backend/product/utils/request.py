import requests
from bs4 import BeautifulSoup


def get_content_sync(url: str):
    page = requests.get(url)
    return BeautifulSoup(page.content, "html.parser")

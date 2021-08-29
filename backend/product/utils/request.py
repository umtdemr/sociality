import asyncio
import aiohttp
from bs4 import BeautifulSoup


def get_url_with_soup(url: str):
    loop = asyncio.get_event_loop()
    soup = loop.run_until_complete(_get_url_with_soup(url))
    return soup


async def _get_url_with_soup(url: str):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            html = await response.text()
            return BeautifulSoup(html, "html.parser")

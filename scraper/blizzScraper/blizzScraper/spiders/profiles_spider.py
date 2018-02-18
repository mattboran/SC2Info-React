import scrapy
from scrapy.contrib.linkextractors import LinkExtractor
from scrapy.contrib.spiders import Rule
from scrapy.selector import Selector
from blizzScraper.items import *

class ProfilesSpider(scrapy.Spider):
    name = "profiles"

    # rules = Rule(LinkExtractor(allow=(), deny=( '(img|i)', '(svg|s)', 'video')))

    def start_requests(self):
        profile_ids = [2000251]
        urls = [
            'http://us.battle.net/sc2/en/profile/%s/1/Sonagi/' % id for id in profile_ids
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        item = ProfileLink()
        page = response.url.split("/")
        sel = Selector(response)
        res = sel.xpath("//div[@id='profile-wrapper']//a")
        for found in res:
            print(found)

# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ProfileLink(scrapy.Item):
    url = scrapy.Field()
    name = scrapy.Field()
    region = scrapy.Field()
    id = scrapy.Field()
    pass
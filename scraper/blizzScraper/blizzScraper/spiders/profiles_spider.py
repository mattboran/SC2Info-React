import scrapy
from scrapy.selector import Selector
from blizzScraper.items import *


class ProfilesSpider(scrapy.Spider):
    name = "profiles"

    def start_requests(self):

        start_index = -1

        with open('scraped.txt', 'r') as f:
            previously_scraped = f.readlines()
            start_index = int(previously_scraped[-1].split(':')[-1]) + 1

        profile_ids = [start_index + i for i in range(2000)]

        num_urls_scraped = 0
        urls = [
            'http://us.battle.net/sc2/en/profile/%s/1/Sonagi/' % id for id in profile_ids
        ]
        if start_index > 0:
            for url in urls:
                if (num_urls_scraped % 33 == 0):
                    previously_scraped[-1] = 'end:%d' % (start_index + num_urls_scraped)
                    with open('scraped.txt', 'w') as f:
                        f.writelines(previously_scraped)

                num_urls_scraped += 1
                yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")
        sel = Selector(response)
        res = sel.xpath("//div[@id='profile-wrapper']//a/@href").extract()[3]
        yield self.parse_profile_link(res)


    def parse_profile_link(self, response):
        item = ProfileLink()
        item['url'] = response
        res = response.split('/')
        item['name'] = res[-2]
        item['region'] = res[-3]
        item['id'] = res[-4]
        return item

        #split_res = res.split('/')
        #print(split_res)

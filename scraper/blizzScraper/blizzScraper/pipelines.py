# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

import psycopg2


class BlizzscraperPipeline(object):
    collection_name = 'scrapy_items'

    def __init__(self, uri, table):
        self.uri = uri
        self.table = table

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            uri = crawler.settings.get('POSTGRES_URI'),
            table = crawler.settings.get('POSTGRES_DB', 'playerids')
        )

    def open_spider(self, spider):
        try:
            client = psycopg2.connect("postgres://dbuser:dbuserparola@localhost:5434/sc2infodb")
            self.client = client
            self.db = client.cursor()
        except:
            print("Failed to init DB!!")
        print("Connected to db: %s" % self.db.connection)

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        try:
            # self.db.execute("SELECT * FROM users;")
            # print(self.db.fetchone())
            self.db.execute("INSERT INTO player_ids (id, name, region, url) VALUES (%s, %s, %s, %s);",
                            [int(item['id']),
                             item['name'],
                             int(item['region']),
                             item['url']])
        except (psycopg2.ProgrammingError) as e:
            print("Failed to insert! Err: ", e)
        self.client.commit()
        print(self.db.query, " SUCCESS!!")
        print(self.db.statusmessage)
        return item

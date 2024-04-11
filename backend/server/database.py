from motor import motor_asyncio


class Database:
    def __init__(self):
        # self.client = motor_asyncio.AsyncIOMotorClient("mongodb://mongodb:27017")
        self.client = motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")

        self.database = self.client.gagarin


DB = Database().database

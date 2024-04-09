from bson.objectid import ObjectId
from motor import motor_asyncio


class Database:
    def __init__(self):

        self.client = motor_asyncio.AsyncIOMotorClient("mongodb://mongodb:27017")
        self.database = self.client.users
        self.user_collection = self.database.get_collection('users_collection')

    @staticmethod
    def user_helper(user) -> dict:
        return {
            'username': user['username'],
        }

    @staticmethod
    def user_login_helper_username(user) -> dict:

        return {
            'username': user['username'],
            'password': user['password'],
        }

    async def create_user(self, user: dict):
        temp_user = await self.user_collection.find_one({"username": user['username']})
        if temp_user:
            return False
        try:
            user = await self.user_collection.insert_one(user)
            new_user = await self.user_collection.find_one({'_id': user.inserted_id})
            return self.user_helper(new_user)
        finally:
            return False

    async def check_password_with_username(self, user_login: dict):

        user = await self.user_collection.find_one({"username": user_login['username']})
        user = self.user_login_helper_username(user)
        if user:
            res = (lambda username, login: True if username['password'] == user_login['password'] else False)(
                user,
                user_login)
        else:
            res = False
        return res

    async def update_user_password(self, username, old_password, user_dict: dict):
        user = await self.user_collection.find_one({"username": username, 'password': old_password})
        if user:
            updated_user = await self.user_collection.update_one(
                {"username": username}, {"$set": user_dict}
            )
            if updated_user:
                return True
        return False

    async def get_user_by_username(self, username: str):
        user = await self.user_collection.find_one({"username": username})
        return self.user_helper(user)

    async def get_all_users(self):
        res = []
        users = self.user_collection.find({})
        async for user in users:
            res.append(self.user_helper(user))
        return res

    async def delete_user(self, username: str, password: str):
        user = self.user_collection.delete_one({"username": username, "password": password})
        if user:
            return True
        return False

    async def get_user(self, type_element: str, data: str):
        res = []
        if type_element == '_id':
            users = self.user_collection.find({f'{type_element}': ObjectId(data)})
            async for user in users:
                res.append(self.user_helper(user))
            return res

        users = self.user_collection.find({f'{type_element}': data})
        async for user in users:
            res.append(self.user_helper(user))
        return res

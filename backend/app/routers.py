from fastapi import APIRouter
from .Database import *
from .models import *

router = APIRouter()
data = Database()


@router.post("/register", response_description="Create new user")
async def create_new_user(user: RegistrationUser):
    user = dict(user)
    new_user = await data.create_user(user)

    return response_model(new_user, 'User added successfully')


@router.get("/login", response_description="login user")
async def login_user(username: str = None, password: str = None, ):
    user = {
        'username': username,
        'password': password,
    }
    try:
        res = await data.check_password_with_username(dict(user))
    finally:
        pass
    print(res)
    if res:
        return response_model(res, 'Succes login with username')
    else:
        return response_model(res, 'Incorrect username/password')


@router.get("/get_all_users", response_description="Получение всех пользователей")
async def get_all_users():
    res = await data.get_all_users()
    return res


@router.delete("/delete_user/{username}", response_description="Удаление пользователя по username")
async def delete_user_by_username(username: str, password: str):
    res = await data.delete_user(username, password)
    if res:
        return response_model(username, 'Succes delete user!')
    return error_response_model('Error', 200, 'Choose correct username/password')


@router.get('/get_user', response_description="Получение пользователя")
async def get_user(type_user: Type, information: str):
    if type_user is Type.username:
        type_user = 'username'
    elif type_user is Type.name:
        type_user = 'name'
    else:
        type_user = '_id'
    res = await data.get_user(type_user, information)
    return res

from enum import Enum

from pydantic import BaseModel, constr


class RegistrationUser(BaseModel):
    username: str
    password: constr(min_length=8, max_length=16)


class LoginUser(BaseModel):
    username: str = None
    old_password: str = None
    new_password: str = None


class Type(Enum):
    username = 'username'
    id = 'id'


def response_model(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def error_response_model(error, code, message):
    return {"error": error, "code": code, "message": message}

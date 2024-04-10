from pydantic import BaseModel


class UserLogin(BaseModel):
    login: str
    password: str


class UserResponse(BaseModel):
    login: str

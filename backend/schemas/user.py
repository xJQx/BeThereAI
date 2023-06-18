from pydantic import BaseModel

from models.enum import TranslationLangEnum


class UserBase(BaseModel):
    name: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class AppUser(User):
    translation_lang: TranslationLangEnum
    iot_users: 'list[IOTUser]' = []


class IOTUser(User):
    mood: int = 0
    live_location: str
    app_users: 'list[AppUser]' = []

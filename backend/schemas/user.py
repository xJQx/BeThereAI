from pydantic import BaseModel

from models.enum import TranslationLangEnum


class UserBase(BaseModel):
    name: str


class UserCreate(UserBase):
    pass


class User(UserBase):
    id: int
    translation_lang: TranslationLangEnum = TranslationLangEnum.ENGLISH
    mood: int = 0
    live_location: str = ''

    class Config:
        orm_mode = True
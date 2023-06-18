
from sqlalchemy import Column, Integer, String, Enum

from database import Base
from models.enum import TranslationLangEnum


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, unique=True)
    name = Column(String)
    translation_lang = Column(Enum(TranslationLangEnum), default=TranslationLangEnum.ENGLISH, nullable=True)
    mood = Column(Integer, default=0)
    live_location = Column(String, default='')

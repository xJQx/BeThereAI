
from sqlalchemy import Column, Integer, String, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped

from backend.database import Base
from backend.models.enum import TranslationLangEnum


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, unique=True)
    name = Column(String)


class AppUser(User):
    translation_lang = Column(Enum(TranslationLangEnum), default=TranslationLangEnum.ENGLISH)
    
    iot_users = Mapped[list["IOTUser"]] = relationship(back_populates="app_users")


class IOTUser(User):
    mood = Column(Integer, default=0)
    live_location = Column(String)

    app_users = Mapped[list["AppUser"]] = relationship(back_populates="iot_users")

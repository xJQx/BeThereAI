from sqlalchemy import Column, Integer

from backend.database import Base


class Result(Base):
    __tablename__ = "results"

    id = Column(Integer, primary_key=True, index=True, unique=True)

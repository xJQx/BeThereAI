from functools import lru_cache
from pydantic import BaseSettings


class Settings(BaseSettings):
    OPENAI_API_KEY: str
    HUME_API_KEY: str
    DATABASE_URL: str = "sqlite:///./sql_app.db"

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()
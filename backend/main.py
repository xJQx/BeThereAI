from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

from backend.config import Settings, get_settings
from backend.database import Base, engine, get_db
from backend.routers import photo, status, translation, voice

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(photo.router)
app.include_router(status.router)
app.include_router(translation.router)
app.include_router(voice.router)


@app.get("/")
async def root():
    return {"message": "BeThereAI"}

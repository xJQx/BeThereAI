from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

from config import Settings, get_settings
from database import Base, engine, get_db
from routers import photo, status, translation, voice, recommend, user

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(photo.router)
app.include_router(status.router)
app.include_router(translation.router)
app.include_router(recommend.router)
app.include_router(voice.router)
app.include_router(user.router)


@app.get("/")
async def root():
    return {"message": "BeThereAI"}

from sqlalchemy.orm import Session

from services.user import get_user_by_id
from schemas.user import User
import models.user as models


def get_user_status(db: Session, user_id: int):
    user = get_user_by_id(db, user_id=user_id)
    return {"mood": user.mood, "location": user.live_location}


def update_user_status(db: Session, user_id: str, mood: str,
                       live_location: str):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    db_user.mood = mood
    db_user.live_location = live_location
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

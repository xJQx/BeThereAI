from sqlalchemy.orm import Session

import models.user as models
import schemas.user as schemas


def get_user_by_name(db: Session, name: str):
    return db.query(models.User).filter(models.User.name == name).first()


def get_user_by_id(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_all_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, name: str):
    db_user = models.User(name=name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
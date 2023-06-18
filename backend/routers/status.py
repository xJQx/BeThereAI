from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db

import services.status as status_services
from schemas.user import User

router = APIRouter(prefix="/status")


@router.get('/{user_id}')
def get_user_status(user_id: int, db: Session = Depends(get_db)):
    return status_services.get_user_status(db, user_id)


@router.post('/{user_id}')
def update_user_status(user_id: int,
                       mood: int = None,
                       live_location=None,
                       db: Session = Depends(get_db)):
    return status_services.update_user_status(db,
                                              user_id,
                                              mood=mood,
                                              live_location=live_location)

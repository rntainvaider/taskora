from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from models.user import User
from core.database import get_db
from schemas.user import UserCreate, UserRead
from repositories.user import create_user

router = APIRouter()


@router.post("/register", response_model=UserRead)
def register(user: UserCreate, db: Session = Depends(get_db)) -> User:
    return create_user(db, user)

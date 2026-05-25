from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from core.database import SessionLocal
from schemas.user import UserCreate, UserRead
from repositories.user import create_user, get_user_by_email
from services import verify_password

router = APIRouter()
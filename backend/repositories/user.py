from sqlalchemy.orm import Session
from models.user import User
from schemas.user import UserCreate
from services import hash_password

def create_user(db: Session, user: UserCreate):
    hash_password = hash_password(user.password)
    
    db_user = User(
        username=user.username,
        email=user.email,
        password=hash_password
    )
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return db_user
from fastapi import APIRouter

from models.user import User
from config.database import connection

user = APIRouter()

@user.get("/")
async def get_all_users():
    return connection.local.user.find()
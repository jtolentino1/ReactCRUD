from pydantic import BaseModel

class User(BaseModel):
    firstName: str
    middleInit: str
    lastName: str
    email: str
    location: str
    fields: list
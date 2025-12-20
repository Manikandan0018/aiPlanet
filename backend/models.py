from sqlalchemy import Column, String, DateTime, JSON
from datetime import datetime
from database import Base
import uuid

class Document(Base):
    __tablename__ = "documents"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    filename = Column(String)
    uploaded_at = Column(DateTime, default=datetime.utcnow)

class Workflow(Base):
    __tablename__ = "workflows"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    nodes = Column(JSON)
    edges = Column(JSON)

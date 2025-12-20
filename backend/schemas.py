from pydantic import BaseModel
from typing import List, Any


# ---------------------------
# Workflow Schemas
# ---------------------------

class WorkflowSchema(BaseModel):
    nodes: List[Any]
    edges: List[Any]


# ---------------------------
# Chat Schemas
# ---------------------------

class ChatRequest(BaseModel):
    question: str


class ChatResponse(BaseModel):
    answer: str


# ---------------------------
# Document Schemas (optional)
# ---------------------------

class UploadResponse(BaseModel):
    status: str

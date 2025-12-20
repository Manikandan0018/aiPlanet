from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import os

from database import engine, Base, SessionLocal
from schemas import WorkflowSchema, ChatRequest, ChatResponse
from models import Document, Workflow
from services.document_loader import load_pdf
from services.vector_store import add_doc
from services.rag import ask

app = FastAPI()

# ✅ CORS (FIXED)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/workflow")
def save_workflow(data: WorkflowSchema, db: Session = Depends(get_db)):
    wf = Workflow(nodes=data.nodes, edges=data.edges)
    db.add(wf)
    db.commit()
    return {"status": "workflow saved"}

@app.post("/upload")
async def upload(file: UploadFile = File(...), db: Session = Depends(get_db)):
    os.makedirs("uploads", exist_ok=True)
    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as f:
        f.write(await file.read())

    text = load_pdf(file_path)

    doc = Document(filename=file.filename)
    db.add(doc)
    db.commit()

    add_doc(doc.id, text)

    return {"status": "document indexed"}

@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    answer = ask(req.question)
    return {"answer": answer}

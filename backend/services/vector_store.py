import chromadb
from services.embeddings import embed

client = chromadb.Client(
    chromadb.config.Settings(persist_directory="chroma_db")
)

collection = client.get_or_create_collection("documents")

def add_doc(doc_id: str, text: str):
    collection.add(
        ids=[doc_id],
        documents=[text],
        embeddings=[embed(text)]
    )

def query_docs(query: str, k: int = 3):
    results = collection.query(
        query_embeddings=[embed(query)],
        n_results=k
    )
    return results["documents"][0] if results["documents"] else []

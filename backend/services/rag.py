import os
from huggingface_hub import InferenceClient
from services.vector_store import query_docs

client = InferenceClient(
    token=os.getenv("HF_TOKEN")
)

MODEL = "mistralai/Mistral-7B-Instruct-v0.2"

def ask(question: str) -> str:
    docs = query_docs(question)
    context = "\n".join(docs) if docs else "No context found."

    messages = [
        {
            "role": "system",
            "content": "Answer ONLY using the provided context."
        },
        {
            "role": "user",
            "content": f"""
Context:
{context}

Question:
{question}
"""
        }
    ]

    response = client.chat_completion(
        model=MODEL,
        messages=messages,
        max_tokens=200,
        temperature=0.2
    )

    return response.choices[0].message["content"]

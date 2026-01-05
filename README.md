AI Workflow Builder – RAG System

live link: https://ai-planet-bay.vercel.app/

An end-to-end AI Workflow Builder that visually constructs and executes a Retrieval-Augmented Generation (RAG) pipeline.
This project allows users to upload documents, build an AI workflow using drag-and-drop components, and chat with the data using an LLM.

📌 Project Overview

This application demonstrates a modern AI system architecture combining:

Visual workflow building (React + React Flow)

Document ingestion and vector search

Retrieval-Augmented Generation (RAG)

AI-powered chat interface

Full-stack integration (Frontend + Backend)

The system is designed to show how real-world AI pipelines work, not just basic chatbot functionality.

🧠 Core Features

🔧 Drag-and-drop AI workflow builder

📄 PDF document upload & parsing

🧩 Document chunking and embedding

🔍 Vector similarity search (RAG)

🤖 LLM-based question answering

💬 Chat interface powered by contextual retrieval

🗄️ PostgreSQL + Vector storage

🌐 REST API with FastAPI

🏗️ Tech Stack
Frontend

React.js

Tailwind CSS

React Flow

Axios

Backend

Python (FastAPI)

Sentence Transformers

PyTorch

Hugging Face / Gemini API

PostgreSQL + pgvector

🔄 System Architecture (RAG Flow)

User uploads documents (PDF)

Documents are chunked into smaller text blocks

Embeddings are generated using Sentence Transformers

Embeddings are stored in a vector database

User submits a query

Query is converted into an embedding

Vector similarity search retrieves relevant chunks

Retrieved context + user query form the prompt

LLM generates a final answer

Answer is returned to the user

🚀 Deployment Status – Summary
✅ Completed Successfully

✔️ Full frontend and backend source code uploaded to GitHub

✔️ Frontend deployed successfully on Vercel

✔️ Application works fully in local development environment

✔️ RAG pipeline executes correctly with uploaded documents

⚠️ Backend Hosting Limitation

❌ Backend could not be deployed on Render (Free Tier)

Reason:

Backend is built using FastAPI (Python 3)

Includes ML/NLP libraries:

PyTorch

Sentence Transformers

These libraries require high memory during initialization

Render free tier provides only 512 MB RAM

Application exceeds memory limit before port binding

Deployment fails due to memory exhaustion

📌 Important:
This is NOT a code or configuration issue.
It is a hosting resource limitation of the free tier.

✅ Supported Deployment Options

The backend can be successfully deployed on:

✔️ Higher-memory hosting plans (Render paid tier)

✔️ Cloud platforms optimized for ML workloads:

AWS EC2

GCP Compute Engine

Azure VM

Railway (paid)

Local / On-Prem servers

🧪 Local Development Setup
Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Frontend
cd frontend
npm install
npm run dev

🎯 Project Purpose

This project was built to demonstrate:

Real-world AI system design

Retrieval-Augmented Generation (RAG)

Vector databases and semantic search

Full-stack AI application development

Workflow-based AI orchestration

👨‍💻 Author

Manikandan R
MERN Stack Developer | AI & RAG Enthusiast

GitHub: https://github.com/Manikandan0018

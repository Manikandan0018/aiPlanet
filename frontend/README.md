VectorShift Frontend Technical Assessment

This project is a submission for the VectorShift Frontend Technical Assessment.
It demonstrates a no-code workflow builder with frontend and backend integration.

🚀 Features
Frontend

Drag-and-drop workflow builder using React + React Flow

Multiple node types:

Input

Text

LLM

Output

Reusable node abstraction to easily add new node types

Clean, unified UI styling

Text node enhancements:

Auto-resizing text area

Dynamic input handles created from {{variable}} syntax

Submit button sends workflow data to backend

Displays backend results using a browser alert

Backend

Built with Python + FastAPI

Accepts workflow data (nodes and edges)

Calculates:

Number of nodes

Number of edges

Whether the workflow is a valid Directed Acyclic Graph (DAG)

Returns results to frontend in JSON format

🧩 Tech Stack

Frontend

React

React Flow

Zustand (state management)

Tailwind CSS

Backend

Python

FastAPI

NetworkX (graph/DAG validation)

▶️ How to Run the Project
Frontend
cd frontend
npm install
npm start


The frontend will be available at:

http://localhost:3000


(or http://localhost:5173 if using Vite)

Backend
cd backend
python -m uvicorn main:app --reload


The backend will be available at:

http://127.0.0.1:8000

🧪 How to Use

Open the frontend in your browser

Drag nodes (Input, Text, LLM, Output) onto the canvas

Connect nodes to form a workflow

In the Text node, define variables using:

{{variableName}}


This creates dynamic input handles

Click Submit

View the backend analysis result in an alert:

Number of nodes

Number of edges

Whether the workflow is a valid DAG

📁 Project Structure
frontend/
  └─ src/
     ├─ components/
     ├─ nodes/
     ├─ App.jsx
     ├─ PipelineUI.jsx
     ├─ store.js
     └─ submit.js

backend/
  └─ main.py

📌 Notes

This project focuses on logic, correctness, and frontend–backend integration

UI is intentionally kept clean and minimal to prioritize usability and maintainability

The workflow builder is designed for desktop usage, which matches typical no-code workflow tools

✅ Assessment Coverage

Node abstraction ✔

Styling ✔

Text node logic ✔

Backend integration ✔

DAG validation ✔

Alert-based result display ✔

👤 Author

Manikandan S
B.Tech Computer Science (Final Year)
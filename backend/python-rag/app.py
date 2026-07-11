import os
from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from pydantic import BaseModel

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain_groq import ChatGroq

app = FastAPI()

DB_FAISS_PATH = "vectorstore/db_faiss"

embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

db = FAISS.load_local(
    DB_FAISS_PATH,
    embedding_model,
    allow_dangerous_deserialization=True
)

qa_chain = RetrievalQA.from_chain_type(
    llm=ChatGroq(
    model_name="llama-3.3-70b-versatile",
    groq_api_key=os.environ["GROQ_API_KEY"]
),
    chain_type="stuff",
    retriever=db.as_retriever(search_kwargs={"k": 3})
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(req: ChatRequest):

    response = qa_chain.invoke({
        "query": req.message
    })

    return {
        "answer": response["result"]
    }
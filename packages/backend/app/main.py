"""
Portfolio Backend - FastAPI Application

This is a placeholder for the future backend implementation.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Portfolio API",
    description="Backend API for portfolio website with RAG capabilities",
    version="0.1.0",
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Health check endpoint."""
    return {"status": "ok", "message": "Portfolio API is running"}


@app.get("/api/health")
async def health_check():
    """API health check."""
    return {"status": "healthy", "version": "0.1.0"}


# Placeholder endpoints - to be implemented
# from app.api.v1 import personal, skills, projects, qualifications, contact, rag
# app.include_router(personal.router, prefix="/api", tags=["personal"])
# app.include_router(skills.router, prefix="/api", tags=["skills"])
# app.include_router(projects.router, prefix="/api", tags=["projects"])
# app.include_router(qualifications.router, prefix="/api", tags=["qualifications"])
# app.include_router(contact.router, prefix="/api", tags=["contact"])
# app.include_router(rag.router, prefix="/api/rag", tags=["rag"])

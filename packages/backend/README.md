# Portfolio Backend

Python FastAPI backend for the portfolio website.

## Planned Features

### API Endpoints

- `GET /api/personal` - Personal information
- `GET /api/skills` - Skills and proficiencies
- `GET /api/projects` - Portfolio projects
- `GET /api/qualifications` - Education and experience
- `GET /api/services` - Service offerings
- `POST /api/contact` - Contact form submission
- `POST /api/rag/query` - RAG-based portfolio Q&A

### RAG Implementation

The backend will implement a Retrieval-Augmented Generation (RAG) system for intelligent portfolio Q&A:

1. **Vector Database**: Store embeddings of portfolio content (projects, skills, experience)
   - Options: Pinecone, Chroma, Qdrant

2. **Embedding Model**: Generate embeddings for content
   - Options: OpenAI Ada, Sentence Transformers

3. **LLM Integration**: Generate contextual responses
   - Options: OpenAI GPT-4, Claude, local models via Ollama

4. **Query Flow**:
   ```
   User Question → Embed Query → Vector Search → Retrieve Context → LLM Generate → Response
   ```

### Tech Stack

- **Framework**: FastAPI
- **Database**: PostgreSQL (optional, for contact form storage)
- **Vector DB**: Pinecone or Chroma
- **AI**: LangChain, OpenAI/Anthropic API
- **Validation**: Pydantic

## Setup (When Implemented)

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn app.main:app --reload --port 8000
```

## Environment Variables

Create `.env` file:

```
OPENAI_API_KEY=your_key
PINECONE_API_KEY=your_key
PINECONE_ENVIRONMENT=your_env
DATABASE_URL=postgresql://user:pass@localhost:5432/portfolio
```

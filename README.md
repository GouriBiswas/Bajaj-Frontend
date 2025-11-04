# CLAIRE.AI

A document Q&A system built with React and Vite.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd claire-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Backend API

This project requires a backend service running at `http://127.0.0.1:8000`.

The API endpoint for document Q&A is:

- **POST** `http://127.0.0.1:8000/api/v1/hackrx/run`

**Request Body:**

```json
{
  "documents": "<document-url>",
  "questions": [
    "<question-1>",
    "<question-2>"
  ]
}
```

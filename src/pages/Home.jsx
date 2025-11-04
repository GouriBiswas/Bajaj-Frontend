import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getAnswers } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/Home.css';

const Home = () => {
  const [url, setUrl] = useState('');
  const [questions, setQuestions] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url || !questions) {
      toast.error('Please provide both a URL and questions.');
      return;
    }
    setLoading(true);
    try {
      const questionArray = questions.split('\n').filter(q => q.trim() !== '');
      const response = await getAnswers(url, questionArray);
      setResults(response.data);
    } catch (error) {
      toast.error('An error occurred while fetching answers.');
    }
    setLoading(false);
  };

  return (
    <div className="home-container">
      {loading && <LoadingSpinner />}
      <div className="hero-section">
        <h1>Document Q&A with CLAIRE.AI</h1>
        <p>Submit a document URL and your questions to get intelligent answers.</p>
      </div>
      <div className="form-and-results-container">
        <div className="qa-form-container">
          <form onSubmit={handleSubmit} className="qa-form">
            <input
              type="text"
              placeholder="Enter document URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <textarea
              placeholder="Enter your questions, one per line"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
            ></textarea>
            <button type="submit">Get Answers</button>
          </form>
        </div>
        {results.length > 0 && (
          <div className="results-container">
            <h2>Results</h2>
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  <p><strong>Question:</strong> {result.question}</p>
                  <p><strong>Answer:</strong> {result.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
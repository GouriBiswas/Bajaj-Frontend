import React from 'react';
import '../styles/AboutUs.css';

/**
 * About Us Page Component
 */
const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">
            About <span className="gradient-text">CLAIRE.AI</span>
          </h1>
          <p className="about-subtitle">
            Democratizing Access to Information Through Intelligent Document Analysis
          </p>
        </div>

        {/* Mission Section */}
        <section className="about-section">
          <div className="section-content">
            <h2 className="section-title">🎯 Our Mission</h2>
            <p className="section-text">
              CLAIRE.AI (Clause-Aware Intelligent Retrieval Engine) is designed to solve one of the most 
              time-consuming challenges in the modern workplace: navigating complex policy documents, 
              insurance policies, and legal documents. Our mission is to democratize access to information 
              by providing instant, accurate answers to user queries from diverse document formats.
            </p>
            <p className="section-text">
              We believe that everyone should have the ability to quickly understand and extract insights 
              from complex documents without requiring domain expertise or spending hours reading through 
              lengthy materials.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2 className="section-title">❗ The Problem We Solve</h2>
            <p className="section-text">
              Navigating complex policy documents, insurance policies, and legal documents is time-consuming 
              and often requires domain expertise. Traditional methods of finding information involve:
            </p>
            <ul className="problem-list">
              <li>Reading through hundreds of pages of dense documentation</li>
              <li>Searching with limited keyword matching capabilities</li>
              <li>Consulting with expensive subject matter experts</li>
              <li>Dealing with multiple document formats and structures</li>
              <li>Language barriers and technical jargon</li>
            </ul>
            <p className="section-text">
              CLAIRE.AI eliminates these barriers by using advanced AI to understand context, extract 
              relevant information, and provide clear, accurate answers in seconds.
            </p>
          </div>
        </section>

        {/* Technology Section */}
        <section className="about-section">
          <div className="section-content">
            <h2 className="section-title">🔬 Our Technology</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">🤖</div>
                <h3 className="tech-title">Google Gemini 2.5 Flash</h3>
                <p className="tech-description">
                  State-of-the-art AI model providing lightning-fast processing and high-accuracy responses 
                  with advanced reasoning capabilities.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">📊</div>
                <h3 className="tech-title">Enhanced RAG Pipeline</h3>
                <p className="tech-description">
                  Retrieval-Augmented Generation with intelligent chunking, context compression, and 
                  optimized vector embeddings for maximum accuracy.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">⚡</div>
                <h3 className="tech-title">Performance Optimization</h3>
                <p className="tech-description">
                  Async processing, vector caching, and rate limiting ensure fast responses while 
                  maintaining system stability and reliability.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">🛡️</div>
                <h3 className="tech-title">Enterprise Security</h3>
                <p className="tech-description">
                  Bearer token authentication, input sanitization, CORS support, and secure credential 
                  management protect your data at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="about-section highlight-section">
          <div className="section-content">
            <h2 className="section-title">🏗️ System Architecture</h2>
            <p className="section-text">
              CLAIRE.AI is built on a robust, scalable architecture that ensures reliability and performance:
            </p>
            
            <div className="architecture-diagram">
              <div className="architecture-layer">
                <h4>Presentation Layer</h4>
                <p>React Frontend with responsive design and real-time updates</p>
              </div>
              <div className="architecture-arrow">↓</div>
              <div className="architecture-layer">
                <h4>API Layer</h4>
                <p>FastAPI with JWT authentication and rate limiting</p>
              </div>
              <div className="architecture-arrow">↓</div>
              <div className="architecture-layer">
                <h4>Processing Layer</h4>
                <p>Document processor with multi-format support and metadata extraction</p>
              </div>
              <div className="architecture-arrow">↓</div>
              <div className="architecture-layer">
                <h4>AI Layer</h4>
                <p>Google Gemini 2.5 Flash with enhanced RAG pipeline</p>
              </div>
              <div className="architecture-arrow">↓</div>
              <div className="architecture-layer">
                <h4>Data Layer</h4>
                <p>Vector store with embedding cache and content validation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="about-section">
          <div className="section-content">
            <h2 className="section-title">✨ Key Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-item">
                <span className="capability-icon">📄</span>
                <div className="capability-content">
                  <h4>Multi-Format Support</h4>
                  <p>PDF, Word, PowerPoint, Excel, CSV, and text files</p>
                </div>
              </div>

              <div className="capability-item">
                <span className="capability-icon">🌍</span>
                <div className="capability-content">
                  <h4>20+ Languages</h4>
                  <p>English, Spanish, French, German, Hindi, Arabic, and more</p>
                </div>
              </div>

              <div className="capability-item">
                <span className="capability-icon">🔗</span>
                <div className="capability-content">
                  <h4>URL-Based Ingestion</h4>
                  <p>Process documents directly from web URLs</p>
                </div>
              </div>

              <div className="capability-item">
                <span className="capability-icon">🎯</span>
                <div className="capability-content">
                  <h4>High Accuracy</h4>
                  <p>Built-in hallucination detection and quality assessment</p>
                </div>
              </div>

              <div className="capability-item">
                <span className="capability-icon">⏱️</span>
                <div className="capability-content">
                  <h4>Real-Time Processing</h4>
                  <p>Get answers in seconds, not hours</p>
                </div>
              </div>

              <div className="capability-item">
                <span className="capability-icon">📈</span>
                <div className="capability-content">
                  <h4>Scalable Infrastructure</h4>
                  <p>Handles multiple concurrent requests efficiently</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section">
          <div className="section-content">
            <h2 className="section-title">👥 Our Vision</h2>
            <p className="section-text">
              We envision a world where complex information is accessible to everyone. Where understanding 
              legal documents, policy papers, and technical materials doesn't require years of training 
              or expensive consultants.
            </p>
            <p className="section-text">
              CLAIRE.AI is just the beginning. We're continuously improving our technology, expanding 
              our capabilities, and working towards making information truly universal and accessible.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-text">
              Experience the power of intelligent document analysis today
            </p>
            <a href="/" className="cta-button">
              Try CLAIRE.AI Now →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

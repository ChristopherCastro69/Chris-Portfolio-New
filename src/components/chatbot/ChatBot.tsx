'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Christopher's portfolio assistant. Ask me anything about his projects, skills, or experience!" },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || data.error || 'Something went wrong.' },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Failed to connect. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '6rem',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'var(--title-color)',
          color: 'var(--container-color)',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 999,
        }}
      >
        <i className={isOpen ? 'bx bx-x' : 'bx bx-chat'}></i>
      </button>

      {/* Chat popover */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '6rem',
            width: '350px',
            maxHeight: '500px',
            backgroundColor: 'var(--container-color)',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '1rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 999,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1rem',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              fontWeight: 600,
              color: 'var(--title-color)',
              fontSize: 'var(--normal-font-size)',
            }}
          >
            Portfolio Chat
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1rem',
              maxHeight: '350px',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: '0.75rem',
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.75rem',
                    fontSize: 'var(--small-font-size)',
                    maxWidth: '85%',
                    backgroundColor:
                      msg.role === 'user' ? 'var(--title-color)' : 'rgba(0,0,0,0.05)',
                    color:
                      msg.role === 'user' ? 'var(--container-color)' : 'var(--text-color)',
                  }}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {isLoading && (
              <div style={{ textAlign: 'left', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.75rem',
                    fontSize: 'var(--small-font-size)',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    color: 'var(--text-color)',
                  }}
                >
                  Typing...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '0.75rem',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: '0.5rem',
                fontSize: 'var(--small-font-size)',
                outline: 'none',
                backgroundColor: 'transparent',
                color: 'var(--text-color)',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                padding: '0.5rem 0.75rem',
                backgroundColor: 'var(--title-color)',
                color: 'var(--container-color)',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              <i className="bx bx-send"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

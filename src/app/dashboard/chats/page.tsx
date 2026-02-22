'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface Visitor {
  visitor_id: string;
  count: number;
  lastActive: string;
}

interface Message {
  id: number;
  role: string;
  content: string;
  created_at: string;
}

export default function ChatsPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedVisitor, setSelectedVisitor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard/chats')
      .then((r) => r.json())
      .then((data) => setVisitors(data.visitors || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const loadChat = async (visitorId: string) => {
    setSelectedVisitor(visitorId);
    setMessages([]);
    const res = await fetch(`/api/dashboard/chats?visitor_id=${encodeURIComponent(visitorId)}`);
    const data = await res.json();
    setMessages(data.messages || []);
  };

  return (
    <DashboardLayout>
      <h1 className="dashboard_page-title">Chat History</h1>

      {loading ? (
        <div className="loading">
          <div className="loading__spinner" />
        </div>
      ) : (
        <div className="dashboard_chats">
          <div className="dashboard_chats-list">
            <h3 className="dashboard_chats-list-title">Visitors ({visitors.length})</h3>
            {visitors.map((v) => (
              <button
                key={v.visitor_id}
                className={`dashboard_chats-visitor ${selectedVisitor === v.visitor_id ? 'dashboard_chats-visitor--active' : ''}`}
                onClick={() => loadChat(v.visitor_id)}
              >
                <span className="dashboard_chats-visitor-id">{v.visitor_id.slice(0, 8)}...</span>
                <span className="dashboard_chats-visitor-meta">
                  {v.count} msgs &middot; {new Date(v.lastActive).toLocaleDateString()}
                </span>
              </button>
            ))}
            {visitors.length === 0 && (
              <p className="dashboard_chats-empty">No chat history yet</p>
            )}
          </div>

          <div className="dashboard_chats-messages">
            {selectedVisitor ? (
              <>
                <h3 className="dashboard_chats-messages-title">
                  Conversation with {selectedVisitor.slice(0, 8)}...
                </h3>
                <div className="dashboard_chats-thread">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`dashboard_chats-bubble dashboard_chats-bubble--${msg.role}`}
                    >
                      <span className="dashboard_chats-bubble-role">{msg.role}</span>
                      <p className="dashboard_chats-bubble-text">{msg.content}</p>
                      <span className="dashboard_chats-bubble-time">
                        {new Date(msg.created_at).toLocaleString()}
                      </span>
                    </div>
                  ))}
                  {messages.length === 0 && (
                    <p className="dashboard_chats-empty">Loading messages...</p>
                  )}
                </div>
              </>
            ) : (
              <div className="dashboard_chats-placeholder">
                <i className="bx bx-chat dashboard_chats-placeholder-icon"></i>
                <p>Select a visitor to view their chat history</p>
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

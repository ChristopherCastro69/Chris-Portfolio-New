-- Run this in your Supabase SQL Editor to create the dashboard tables

CREATE TABLE page_views (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  page text NOT NULL,
  referrer text,
  user_agent text,
  visitor_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE chat_logs (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  visitor_id text NOT NULL,
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE api_usage (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  service text NOT NULL CHECK (service IN ('groq', 'mem0')),
  endpoint text NOT NULL,
  tokens_used int,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for common queries
CREATE INDEX idx_page_views_created_at ON page_views (created_at);
CREATE INDEX idx_page_views_visitor_id ON page_views (visitor_id);
CREATE INDEX idx_page_views_page ON page_views (page);
CREATE INDEX idx_chat_logs_created_at ON chat_logs (created_at);
CREATE INDEX idx_chat_logs_visitor_id ON chat_logs (visitor_id);
CREATE INDEX idx_api_usage_created_at ON api_usage (created_at);
CREATE INDEX idx_api_usage_service ON api_usage (service);

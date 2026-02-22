-- Seed data for dashboard tables
-- Run this in the Supabase SQL Editor after running supabase-migration.sql

-- 3 distinct visitor IDs
-- visitor_a: 'v_a1b2c3d4-1111-4000-8000-000000000001'
-- visitor_b: 'v_a1b2c3d4-2222-4000-8000-000000000002'
-- visitor_c: 'v_a1b2c3d4-3333-4000-8000-000000000003'

-- User agents
-- Chrome:  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
-- Safari:  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1'
-- Firefox: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0'

----------------------------------------------------------------------
-- page_views (~40 rows, last 14 days)
----------------------------------------------------------------------
INSERT INTO page_views (page, referrer, user_agent, visitor_id, created_at) VALUES

-- Day -13 (visitor_a discovers site via Google)
('/', 'https://google.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '13 days' + interval '10 hours'),
('/#about', 'https://google.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '13 days' + interval '10 hours 2 minutes'),
('/#skills', 'https://google.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '13 days' + interval '10 hours 5 minutes'),

-- Day -12 (visitor_b from LinkedIn)
('/', 'https://linkedin.com/in/christophercastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '12 days' + interval '14 hours'),
('/#about', 'https://linkedin.com/in/christophercastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '12 days' + interval '14 hours 1 minute'),
('/projects', 'https://linkedin.com/in/christophercastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '12 days' + interval '14 hours 4 minutes'),

-- Day -11 (visitor_c direct traffic, Firefox)
('/', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '11 days' + interval '9 hours'),
('/certifications', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '11 days' + interval '9 hours 3 minutes'),

-- Day -10 (visitor_a returns, direct)
('/', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '10 days' + interval '11 hours'),
('/projects', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '10 days' + interval '11 hours 3 minutes'),
('/#contact', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '10 days' + interval '11 hours 6 minutes'),

-- Day -9 (visitor_b returns from GitHub)
('/', 'https://github.com/chriscastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '9 days' + interval '16 hours'),
('/#skills', 'https://github.com/chriscastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '9 days' + interval '16 hours 2 minutes'),

-- Day -8 (visitor_c browses projects)
('/', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '8 days' + interval '20 hours'),
('/projects', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '8 days' + interval '20 hours 2 minutes'),
('/#about', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '8 days' + interval '20 hours 5 minutes'),

-- Day -7 (visitor_a from Google again)
('/', 'https://google.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '7 days' + interval '8 hours'),
('/#skills', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '7 days' + interval '8 hours 4 minutes'),
('/certifications', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '7 days' + interval '8 hours 7 minutes'),

-- Day -6 (visitor_b deep dive)
('/', 'https://linkedin.com/in/christophercastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '6 days' + interval '12 hours'),
('/#about', NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '6 days' + interval '12 hours 1 minute'),
('/projects', NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '6 days' + interval '12 hours 3 minutes'),
('/certifications', NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '6 days' + interval '12 hours 6 minutes'),

-- Day -5 (quiet day, just visitor_c)
('/', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '5 days' + interval '18 hours'),
('/#contact', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '5 days' + interval '18 hours 4 minutes'),

-- Day -4 (visitor_a and visitor_b)
('/', 'https://google.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '4 days' + interval '9 hours'),
('/projects', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '4 days' + interval '9 hours 5 minutes'),
('/', 'https://github.com/chriscastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '4 days' + interval '15 hours'),

-- Day -3 (visitor_a uses chatbot — page views before chat)
('/', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '3 days' + interval '10 hours'),
('/#about', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '3 days' + interval '10 hours 2 minutes'),

-- Day -2 (visitor_b uses chatbot)
('/', 'https://linkedin.com/in/christophercastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '2 days' + interval '13 hours'),
('/#skills', NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '2 days' + interval '13 hours 3 minutes'),
('/projects', NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '2 days' + interval '13 hours 5 minutes'),

-- Day -1 (visitor_c returns)
('/', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '1 day' + interval '11 hours'),
('/certifications', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0', 'v_a1b2c3d4-3333-4000-8000-000000000003', now() - interval '1 day' + interval '11 hours 3 minutes'),

-- Today (visitor_a and visitor_b)
('/', 'https://google.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '2 hours'),
('/#skills', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '1 hour 50 minutes'),
('/projects', NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'v_a1b2c3d4-1111-4000-8000-000000000001', now() - interval '1 hour 45 minutes'),
('/', 'https://linkedin.com/in/christophercastro', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1', 'v_a1b2c3d4-2222-4000-8000-000000000002', now() - interval '30 minutes');


----------------------------------------------------------------------
-- chat_logs (~16 rows, 2 visitor conversations)
----------------------------------------------------------------------

-- Conversation 1: visitor_a (Day -3, after page views)
INSERT INTO chat_logs (visitor_id, role, content, created_at) VALUES
('v_a1b2c3d4-1111-4000-8000-000000000001', 'user', 'Hey! What tech stack does Christopher work with?', now() - interval '3 days' + interval '10 hours 10 minutes'),
('v_a1b2c3d4-1111-4000-8000-000000000001', 'assistant', 'Christopher works with a modern full-stack toolkit. On the frontend he uses React, Next.js, and TypeScript. For backend work he reaches for Node.js, Python, and has experience with Express and FastAPI. He also works with databases like PostgreSQL and MongoDB, and is comfortable with cloud services like AWS and Vercel for deployment.', now() - interval '3 days' + interval '10 hours 10 minutes 5 seconds'),
('v_a1b2c3d4-1111-4000-8000-000000000001', 'user', 'Nice. Does he have any certifications?', now() - interval '3 days' + interval '10 hours 12 minutes'),
('v_a1b2c3d4-1111-4000-8000-000000000001', 'assistant', 'Yes! Christopher has several certifications. You can view the full list on the Certifications page. They cover areas like cloud computing, data science, and software development. Check out the certifications section for all the details.', now() - interval '3 days' + interval '10 hours 12 minutes 4 seconds'),
('v_a1b2c3d4-1111-4000-8000-000000000001', 'user', 'What kind of projects has he built?', now() - interval '3 days' + interval '10 hours 14 minutes'),
('v_a1b2c3d4-1111-4000-8000-000000000001', 'assistant', 'Christopher has worked on a variety of projects including web applications, data pipelines, and AI-powered tools. Some highlights include this portfolio site itself (built with Next.js and TypeScript), machine learning projects, and full-stack applications. You can browse all his projects on the Projects page with links to live demos and source code.', now() - interval '3 days' + interval '10 hours 14 minutes 6 seconds'),
('v_a1b2c3d4-1111-4000-8000-000000000001', 'user', 'How can I get in touch with him?', now() - interval '3 days' + interval '10 hours 16 minutes'),
('v_a1b2c3d4-1111-4000-8000-000000000001', 'assistant', 'You can reach Christopher through the Contact section on this site — just scroll down or click Contact in the nav. You can also connect with him on LinkedIn or check out his GitHub for code samples. He''s always open to discussing new opportunities and collaborations!', now() - interval '3 days' + interval '10 hours 16 minutes 5 seconds');

-- Conversation 2: visitor_b (Day -2, after page views)
INSERT INTO chat_logs (visitor_id, role, content, created_at) VALUES
('v_a1b2c3d4-2222-4000-8000-000000000002', 'user', 'Hi, I saw Christopher''s profile on LinkedIn. What''s his background?', now() - interval '2 days' + interval '13 hours 10 minutes'),
('v_a1b2c3d4-2222-4000-8000-000000000002', 'assistant', 'Welcome! Christopher is a software engineer with a strong foundation in computer science. He has experience in full-stack development, data engineering, and machine learning. He''s passionate about building clean, performant applications and is always exploring new technologies.', now() - interval '2 days' + interval '13 hours 10 minutes 4 seconds'),
('v_a1b2c3d4-2222-4000-8000-000000000002', 'user', 'Is he open to remote work?', now() - interval '2 days' + interval '13 hours 12 minutes'),
('v_a1b2c3d4-2222-4000-8000-000000000002', 'assistant', 'Yes, Christopher is open to both remote and hybrid opportunities. He''s experienced with remote collaboration tools and async communication. Feel free to reach out through the contact form to discuss potential roles!', now() - interval '2 days' + interval '13 hours 12 minutes 3 seconds'),
('v_a1b2c3d4-2222-4000-8000-000000000002', 'user', 'What are his strongest skills?', now() - interval '2 days' + interval '13 hours 14 minutes'),
('v_a1b2c3d4-2222-4000-8000-000000000002', 'assistant', 'Christopher''s strongest areas include React/Next.js for frontend development, Python and Node.js for backend systems, and SQL/PostgreSQL for data work. He''s also skilled in TypeScript, cloud deployment (AWS, Vercel), and has growing expertise in machine learning and AI integration.', now() - interval '2 days' + interval '13 hours 14 minutes 5 seconds'),
('v_a1b2c3d4-2222-4000-8000-000000000002', 'user', 'Thanks, this is really helpful!', now() - interval '2 days' + interval '13 hours 15 minutes'),
('v_a1b2c3d4-2222-4000-8000-000000000002', 'assistant', 'You''re welcome! Don''t hesitate to reach out if you have more questions. Christopher would love to hear from you. Good luck with your search!', now() - interval '2 days' + interval '13 hours 15 minutes 3 seconds');


----------------------------------------------------------------------
-- api_usage (~20 rows, matching chat timestamps)
----------------------------------------------------------------------
INSERT INTO api_usage (service, endpoint, tokens_used, created_at) VALUES

-- Conversation 1 (visitor_a, Day -3): 4 exchanges = 4 groq + 4 mem0
('groq', '/api/chat', 127, now() - interval '3 days' + interval '10 hours 10 minutes 5 seconds'),
('mem0', '/api/chat', NULL, now() - interval '3 days' + interval '10 hours 10 minutes 5 seconds'),
('groq', '/api/chat', 189, now() - interval '3 days' + interval '10 hours 12 minutes 4 seconds'),
('mem0', '/api/chat', NULL, now() - interval '3 days' + interval '10 hours 12 minutes 4 seconds'),
('groq', '/api/chat', 234, now() - interval '3 days' + interval '10 hours 14 minutes 6 seconds'),
('mem0', '/api/chat', NULL, now() - interval '3 days' + interval '10 hours 14 minutes 6 seconds'),
('groq', '/api/chat', 156, now() - interval '3 days' + interval '10 hours 16 minutes 5 seconds'),
('mem0', '/api/chat', NULL, now() - interval '3 days' + interval '10 hours 16 minutes 5 seconds'),

-- Conversation 2 (visitor_b, Day -2): 4 exchanges = 4 groq + 4 mem0
('groq', '/api/chat', 168, now() - interval '2 days' + interval '13 hours 10 minutes 4 seconds'),
('mem0', '/api/chat', NULL, now() - interval '2 days' + interval '13 hours 10 minutes 4 seconds'),
('groq', '/api/chat', 112, now() - interval '2 days' + interval '13 hours 12 minutes 3 seconds'),
('mem0', '/api/chat', NULL, now() - interval '2 days' + interval '13 hours 12 minutes 3 seconds'),
('groq', '/api/chat', 245, now() - interval '2 days' + interval '13 hours 14 minutes 5 seconds'),
('mem0', '/api/chat', NULL, now() - interval '2 days' + interval '13 hours 14 minutes 5 seconds'),
('groq', '/api/chat', 87, now() - interval '2 days' + interval '13 hours 15 minutes 3 seconds'),
('mem0', '/api/chat', NULL, now() - interval '2 days' + interval '13 hours 15 minutes 3 seconds'),

-- A few extra groq calls from today (visitor_a browsing triggered no chat, but maybe a greeting)
('groq', '/api/chat', 64, now() - interval '1 hour 48 minutes'),
('mem0', '/api/chat', NULL, now() - interval '1 hour 48 minutes'),
('groq', '/api/chat', 312, now() - interval '1 hour 46 minutes'),
('mem0', '/api/chat', NULL, now() - interval '1 hour 46 minutes');

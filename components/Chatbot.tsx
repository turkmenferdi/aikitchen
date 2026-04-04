'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useParams } from 'next/navigation';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const locale = Array.isArray(params?.locale) ? params.locale[0] : (params?.locale as string);

  const placeholder = locale === 'tr' ? 'Sorunuzu yazın...' : 'Ask your question...';
  const btnText = locale === 'tr' ? 'Gönder' : 'Send';
  const greeting = locale === 'tr' ? 'Merhaba! Size nasıl yardımcı olabilirim?' : 'Hello! How can I help you?';
  const title = locale === 'tr' ? 'AI Yardımcısı' : 'AI Assistant';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
          locale,
        }),
      });

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split('\n\n');
        
        // Keep the last part in buffer in case it's incomplete
        buffer = parts[parts.length - 1];
        
        for (let i = 0; i < parts.length - 1; i++) {
          const part = parts[i].trim();
          if (part.startsWith('data: ')) {
            try {
              const jsonStr = part.substring(6);
              const data = JSON.parse(jsonStr);
              if (data.content) {
                assistantMessage += data.content;
                setMessages((prev) => {
                  const updated = [...prev];
                  const lastMsg = updated[updated.length - 1];
                  if (lastMsg?.role === 'assistant') {
                    lastMsg.content = assistantMessage;
                  } else {
                    updated.push({ role: 'assistant', content: assistantMessage });
                  }
                  return updated;
                });
              }
            } catch (e) {
              console.error('Parse error:', e);
            }
          }
        }
      }
      
      // Handle any remaining buffer data
      if (buffer.trim().startsWith('data: ')) {
        try {
          const jsonStr = buffer.trim().substring(6);
          const data = JSON.parse(jsonStr);
          if (data.content) {
            assistantMessage += data.content;
            setMessages((prev) => {
              const updated = [...prev];
              const lastMsg = updated[updated.length - 1];
              if (lastMsg?.role === 'assistant') {
                lastMsg.content = assistantMessage;
              } else {
                updated.push({ role: 'assistant', content: assistantMessage });
              }
              return updated;
            });
          }
        } catch (e) {
          console.error('Parse error:', e);
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: locale === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-on-primary rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[90vw] bg-surface-container-high rounded-2xl shadow-2xl border border-outline/20 flex flex-col z-50 max-h-[600px]">
          {/* Header */}
          <div className="bg-primary text-on-primary p-4 rounded-t-2xl flex justify-between items-center flex-shrink-0">
            <span className="font-semibold">{title}</span>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity" aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-surface">
            {messages.length === 0 && (
              <div className="text-on-surface-variant text-center text-sm py-8">
                <p>{greeting}</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm break-words ${
                    msg.role === 'user'
                      ? 'bg-primary text-on-primary rounded-br-none'
                      : 'bg-surface-container text-on-surface rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface-container text-on-surface px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-outline/20 p-4 flex gap-2 bg-surface-container-low flex-shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder={placeholder}
              disabled={loading}
              className="flex-1 px-3 py-2 rounded-lg bg-surface text-on-surface border border-outline/20 focus:outline-none focus:border-primary transition-colors text-sm disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-primary text-on-primary p-2 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
              aria-label={btnText}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

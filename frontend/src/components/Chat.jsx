import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! Start the flow, then ask me anything about your uploaded data.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim()) return;


    const userText = message;
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        question: userText,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: res.data.answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "⚠️ Sorry, I couldn’t process that request.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* HEADER */}
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <div className="font-medium text-gray-800">AI Chat</div>
       
          <span className="text-xs text-green-600 font-medium">● Running</span>
        
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-sm">
        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role} text={m.text} />
        ))}

        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="border-t px-3 py-3 flex gap-2 bg-white">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your AI about this workflow..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={sendMessage}
          className={"px-4 py-2 rounded-lg text-white text-sm"}
        >
          Send
        </button>
      </div>
    </div>
  );
}

/* ------------------ UI Components ------------------ */

function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex items-end gap-2 ${isUser ? "justify-end" : ""}`}>
      {!isUser && <Avatar />}
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl leading-relaxed ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-gray-100 text-gray-900 rounded-bl-sm"
        }`}
      >
        {text}
      </div>
      {isUser && <UserAvatar />}
    </div>
  );
}

function Avatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-600">
      AI
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="w-10 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
      User
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 text-gray-400 text-xs">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
      <span>AI is typing…</span>
    </div>
  );
}

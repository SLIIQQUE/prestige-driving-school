"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles, Bot, Package, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const aiFeatures = [
  {
    id: "chat",
    icon: Bot,
    title: "AI Chat Assistant",
    description: "Ask me anything about driving lessons, schedules, or our services",
  },
  {
    id: "recommend",
    icon: Package,
    title: "Package Recommender",
    description: "Get personalized package recommendations based on your needs",
  },
  {
    id: "instructor",
    icon: BookOpen,
    title: "Virtual Instructor",
    description: "Learn driving tips and guidance from our AI virtual instructor",
  },
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm your Prestige AI Assistant. How can I help you today? You can ask me about driving lessons, packages, or get personalized recommendations.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFeatures, setShowFeatures] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: input,
          history: messages.slice(-5),
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "I apologize, but I'm having trouble responding right now. Please try again or contact us directly.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting. Please try again or contact us directly at 0806 860 9291.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: "var(--accent)" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[500px] rounded-2xl border overflow-hidden flex flex-col"
            style={{ 
              backgroundColor: "var(--card)", 
              borderColor: "var(--border)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <div 
              className="p-4 border-b flex items-center justify-between"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--accent)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Prestige AI</h3>
                  <p className="text-xs text-white/70">Your driving assistant</p>
                </div>
              </div>
              <Link
                href="/ai"
                onClick={() => setIsOpen(false)}
                className="text-xs text-white/80 hover:text-white underline"
              >
                Full Page
              </Link>
            </div>

            <button
              onClick={() => setShowFeatures(!showFeatures)}
              className="w-full p-3 border-b text-left flex items-center justify-between"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                AI Features
              </span>
              {showFeatures ? (
                <ChevronUp className="w-4 h-4" style={{ color: "var(--foreground-muted)" }} />
              ) : (
                <ChevronDown className="w-4 h-4" style={{ color: "var(--foreground-muted)" }} />
              )}
            </button>

            <AnimatePresence>
              {showFeatures && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-b overflow-hidden"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="p-3 space-y-2">
                    {aiFeatures.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => setActiveFeature(feature.id)}
                        className="w-full p-3 rounded-xl text-left transition-all hover:scale-[1.02]"
                        style={{ 
                          backgroundColor: activeFeature === feature.id ? "var(--accent)" : "var(--background)",
                          border: "1px solid var(--border)"
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <feature.icon 
                            className="w-5 h-5" 
                            style={{ color: activeFeature === feature.id ? "white" : "var(--accent)" }} 
                          />
                          <div>
                            <p 
                              className="font-medium text-sm"
                              style={{ color: activeFeature === feature.id ? "white" : "var(--foreground)" }}
                            >
                              {feature.title}
                            </p>
                            <p 
                              className="text-xs"
                              style={{ color: activeFeature === feature.id ? "white/70" : "var(--foreground-muted)" }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === "user"
                        ? "rounded-br-md"
                        : "rounded-bl-md"
                    }`}
                    style={{
                      backgroundColor: message.role === "user" ? "var(--accent)" : "var(--background)",
                      border: "1px solid var(--border)"
                    }}
                  >
                    <p className="text-sm" style={{ color: message.role === "user" ? "white" : "var(--foreground)" }}>
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="p-3 rounded-2xl rounded-bl-md"
                    style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "var(--accent)", animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "var(--accent)", animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "var(--accent)", animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 rounded-full text-sm border outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: "var(--background)", 
                    borderColor: "var(--border)",
                    color: "var(--foreground)"
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: input.trim() ? "var(--accent)" : "var(--border)",
                    opacity: input.trim() ? 1 : 0.5
                  }}
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

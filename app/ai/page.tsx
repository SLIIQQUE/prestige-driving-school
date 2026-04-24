"use client";

import "./metadata";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Bot, 
  Package, 
  BookOpen, 
  Send, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Target,
  Car
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

type Tab = "chat" | "recommend" | "instructor";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface QuizAnswer {
  experience: string;
  goal: string;
  schedule: string;
  timeline: string;
  budget: string;
}

export default function AIPage() {
  const [activeTab, setActiveTab] = useState<Tab>("chat");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm your Prestige AI Assistant. How can I help you today? You can ask me about driving lessons, packages, schedules, or anything else about our driving school.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer>({
    experience: "",
    goal: "",
    schedule: "",
    timeline: "",
    budget: "",
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(true);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "I apologize, but I'm having trouble connecting. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuizSubmit = () => {
    const { experience, goal, schedule, timeline, budget } = quizAnswers;

    let rec = "";
    
    if (experience === "none" && budget === "low") {
      rec = "Starter Package (₦45,000)\n\nPerfect for beginners with no experience. Includes 5 comprehensive lessons covering fundamentals. Best for those on a budget.";
    } else if (experience === "some" || goal === "license") {
      rec = "Standard Package (₦75,000)\n\nIdeal for those with some experience or wanting to obtain their license. Includes 10 lessons with defensive driving techniques.";
    } else if (experience === "none" && goal === "expert") {
      rec = "Premium Package (₦120,000)\n\nComplete training for new learners wanting thorough preparation. 20 lessons + road test preparation.";
    } else if (budget === "high") {
      rec = "Premium Package (₦120,000)\n\nOur most comprehensive package. Best for those wanting complete mastery and premium support.";
    } else {
      rec = "Standard Package (₦75,000)\n\nGreat balance of cost and comprehensive training. Suitable for most learners.";
    }

    setRecommendation(rec);
    setShowQuiz(false);
  };

  const tabs = [
    { id: "chat" as const, icon: Bot, label: "AI Chat" },
    { id: "recommend" as const, icon: Package, label: "Package Recommender" },
    { id: "instructor" as const, icon: BookOpen, label: "Virtual Instructor" },
  ];

  const instructorTopics = [
    { title: "Mirror Checks", description: "How to properly check mirrors before changing lanes" },
    { title: "Blind Spots", description: "Identifying and checking blind spots safely" },
    { title: "Parking Techniques", description: "Parallel parking and reverse parking tips" },
    { title: "Defensive Driving", description: "Anticipating hazards and safe following distance" },
    { title: "Night Driving", description: "Essential tips for driving safely at night" },
    { title: "Road Signs", description: "Understanding common road signs and markings" },
    { title: "Emergency Braking", description: "Proper braking techniques in emergencies" },
    { title: "Roundabout Navigation", description: "How to safely navigate roundabouts" },
  ];

  return (
    <>
      <PageBanner
        title="AI Assistant"
        subtitle="Experience the future of driving education with our AI-powered assistant. Get instant answers, personalized recommendations, and expert guidance."
      />

      <section className="py-24" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex-shrink-0">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? "border"
                        : "hover:bg-white/5"
                    }`}
                    style={{
                      backgroundColor: activeTab === tab.id ? "var(--accent)" : "transparent",
                      borderColor: "var(--border)",
                    }}
                  >
                    <tab.icon 
                      className="w-5 h-5" 
                      style={{ color: activeTab === tab.id ? "white" : "var(--foreground-muted)" }} 
                    />
                    <span 
                      className="font-medium"
                      style={{ color: activeTab === tab.id ? "white" : "var(--foreground)" }}
                    >
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              <div 
                className="mt-8 p-4 rounded-xl border"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5" style={{ color: "var(--accent)" }} />
                  <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                    AI Powered
                  </span>
                </div>
                <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
                  Our AI assistant is available 24/7 to help you with any questions about driving lessons.
                </p>
              </div>
            </div>

            <div 
              className="flex-1 rounded-2xl border overflow-hidden"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", minHeight: "600px" }}
            >
              {activeTab === "chat" && (
                <div className="flex flex-col h-full">
                  <div 
                    className="p-4 border-b"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--accent)" }}
                  >
                    <h3 className="font-semibold text-white">AI Chat Assistant</h3>
                    <p className="text-sm text-white/70">Ask me anything about driving lessons</p>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-2xl ${
                            message.role === "user" ? "rounded-br-md" : "rounded-bl-md"
                          }`}
                          style={{
                            backgroundColor: message.role === "user" ? "var(--accent)" : "var(--background)",
                            border: "1px solid var(--border)",
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
                          className="p-4 rounded-2xl rounded-bl-md"
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
                  </div>

                  <div className="p-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 rounded-xl border outline-none"
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
                        className="px-6 py-3 rounded-xl font-medium"
                        style={{ 
                          backgroundColor: input.trim() ? "var(--accent)" : "var(--border)",
                          color: "white"
                        }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "recommend" && (
                <div className="flex flex-col h-full">
                  <div 
                    className="p-4 border-b"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--accent)" }}
                  >
                    <h3 className="font-semibold text-white">Package Recommender</h3>
                    <p className="text-sm text-white/70">Get personalized package recommendations</p>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6">
                    {recommendation ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                      >
                        <div 
                          className="p-6 rounded-2xl border"
                          style={{ backgroundColor: "var(--background)", borderColor: "var(--accent)" }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-6 h-6" style={{ color: "var(--accent)" }} />
                            <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                              Recommended Package
                            </span>
                          </div>
                          <pre className="whitespace-pre-wrap text-sm" style={{ color: "var(--foreground)" }}>
                            {recommendation}
                          </pre>
                        </div>

                        <div className="flex gap-4">
                          <Link
                            href="/contact"
                            className="flex-1 py-3 rounded-xl font-medium text-center"
                            style={{ backgroundColor: "var(--accent)", color: "white" }}
                          >
                            Book This Package
                          </Link>
                          <button
                            onClick={() => {
                              setRecommendation(null);
                              setShowQuiz(true);
                              setQuizAnswers({
                                experience: "",
                                goal: "",
                                schedule: "",
                                timeline: "",
                                budget: "",
                              });
                            }}
                            className="px-6 py-3 rounded-xl font-medium border"
                            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                          >
                            Retake Quiz
                          </button>
                        </div>
                      </motion.div>
                    ) : showQuiz ? (
                      <div className="space-y-6">
                        <div>
                          <label className="flex items-center gap-2 font-medium mb-3" style={{ color: "var(--foreground)" }}>
                            <Target className="w-5 h-5" style={{ color: "var(--accent)" }} />
                            What is your driving experience level?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["none", "some", "experienced"].map((exp) => (
                              <button
                                key={exp}
                                onClick={() => setQuizAnswers({ ...quizAnswers, experience: exp })}
                                className={`p-3 rounded-xl border capitalize transition-all ${
                                  quizAnswers.experience === exp ? "border-[var(--accent)]" : ""
                                }`}
                                style={{ 
                                  backgroundColor: quizAnswers.experience === exp ? "var(--accent)" : "var(--background)",
                                  color: quizAnswers.experience === exp ? "white" : "var(--foreground)"
                                }}
                              >
                                {exp === "none" ? "No Experience" : exp === "some" ? "Some Experience" : "Experienced"}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="flex items-center gap-2 font-medium mb-3" style={{ color: "var(--foreground)" }}>
                            <Car className="w-5 h-5" style={{ color: "var(--accent)" }} />
                            What is your main goal?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["license", "skills", "expert"].map((goal) => (
                              <button
                                key={goal}
                                onClick={() => setQuizAnswers({ ...quizAnswers, goal })}
                                className={`p-3 rounded-xl border capitalize transition-all ${
                                  quizAnswers.goal === goal ? "border-[var(--accent)]" : ""
                                }`}
                                style={{ 
                                  backgroundColor: quizAnswers.goal === goal ? "var(--accent)" : "var(--background)",
                                  color: quizAnswers.goal === goal ? "white" : "var(--foreground)"
                                }}
                              >
                                {goal === "license" ? "Get License" : goal === "skills" ? "Improve Skills" : "Expert Driver"}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="flex items-center gap-2 font-medium mb-3" style={{ color: "var(--foreground)" }}>
                            <Calendar className="w-5 h-5" style={{ color: "var(--accent)" }} />
                            What is your schedule availability?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["weekdays", "weekends", "flexible"].map((schedule) => (
                              <button
                                key={schedule}
                                onClick={() => setQuizAnswers({ ...quizAnswers, schedule })}
                                className={`p-3 rounded-xl border capitalize transition-all ${
                                  quizAnswers.schedule === schedule ? "border-[var(--accent)]" : ""
                                }`}
                                style={{ 
                                  backgroundColor: quizAnswers.schedule === schedule ? "var(--accent)" : "var(--background)",
                                  color: quizAnswers.schedule === schedule ? "white" : "var(--foreground)"
                                }}
                              >
                                {schedule === "weekdays" ? "Weekdays" : schedule === "weekends" ? "Weekends" : "Flexible"}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="flex items-center gap-2 font-medium mb-3" style={{ color: "var(--foreground)" }}>
                            <Clock className="w-5 h-5" style={{ color: "var(--accent)" }} />
                            When do you need to get your license?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {[" ASAP", "1-3 months", "3+ months"].map((timeline) => (
                              <button
                                key={timeline}
                                onClick={() => setQuizAnswers({ ...quizAnswers, timeline })}
                                className={`p-3 rounded-xl border capitalize transition-all ${
                                  quizAnswers.timeline === timeline ? "border-[var(--accent)]" : ""
                                }`}
                                style={{ 
                                  backgroundColor: quizAnswers.timeline === timeline ? "var(--accent)" : "var(--background)",
                                  color: quizAnswers.timeline === timeline ? "white" : "var(--foreground)"
                                }}
                              >
                                {timeline}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="flex items-center gap-2 font-medium mb-3" style={{ color: "var(--foreground)" }}>
                            <span className="w-5 h-5" style={{ color: "var(--accent)" }}>₦</span>
                            What is your budget?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {["low", "medium", "high"].map((budget) => (
                              <button
                                key={budget}
                                onClick={() => setQuizAnswers({ ...quizAnswers, budget })}
                                className={`p-3 rounded-xl border capitalize transition-all ${
                                  quizAnswers.budget === budget ? "border-[var(--accent)]" : ""
                                }`}
                                style={{ 
                                  backgroundColor: quizAnswers.budget === budget ? "var(--accent)" : "var(--background)",
                                  color: quizAnswers.budget === budget ? "white" : "var(--foreground)"
                                }}
                              >
                                {budget === "low" ? "₦45k" : budget === "medium" ? "₦75k" : "₦120k+"}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={handleQuizSubmit}
                          disabled={!quizAnswers.experience || !quizAnswers.goal || !quizAnswers.schedule || !quizAnswers.timeline || !quizAnswers.budget}
                          className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                          style={{ 
                            backgroundColor: "var(--accent)", 
                            color: "white",
                            opacity: (!quizAnswers.experience || !quizAnswers.goal || !quizAnswers.schedule || !quizAnswers.timeline || !quizAnswers.budget) ? 0.5 : 1
                          }}
                        >
                          Get Recommendation
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {activeTab === "instructor" && (
                <div className="flex flex-col h-full">
                  <div 
                    className="p-4 border-b"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--accent)" }}
                  >
                    <h3 className="font-semibold text-white">Virtual Instructor</h3>
                    <p className="text-sm text-white/70">Learn driving tips from our AI expert</p>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {instructorTopics.map((topic, index) => (
                        <motion.div
                          key={topic.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02]"
                          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
                        >
                          <h4 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                            {topic.title}
                          </h4>
                          <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
                            {topic.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 rounded-xl border" style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}>
                      <h4 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                        Have a specific question?
                      </h4>
                      <p className="text-sm mb-4" style={{ color: "var(--foreground-muted)" }}>
                        Chat with our AI to get personalized driving tips and guidance.
                      </p>
                      <button
                        onClick={() => setActiveTab("chat")}
                        className="px-6 py-3 rounded-xl font-medium"
                        style={{ backgroundColor: "var(--accent)", color: "white" }}
                      >
                        Start Chat
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

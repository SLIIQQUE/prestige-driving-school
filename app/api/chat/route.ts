import { NextRequest, NextResponse } from "next/server";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = "llama-3.3-70b-versatile";

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!GROQ_API_KEY) {
      return NextResponse.json({
        response: "AI Assistant is not configured yet. Please set up the API key environment variable to enable AI assistance. In the meantime, you can contact us at 0806 860 9291 or email umohjohn770@gmail.com for assistance.",
      });
    }

    const systemPrompt = `You are the AI assistant for Prestige Driving School, a premium driving school in Sabo Yaba, Lagos, Nigeria.

About Prestige Driving School:
- We offer professional driving lessons with FRSC certified instructors
- We have a 98% pass rate
- Our packages include:
  - Starter Package: ₦45,000 (5 lessons, basic training)
  - Standard Package: ₦75,000 (10 lessons, defensive driving)
  - Premium Package: ₦120,000 (20 lessons, complete training + road test prep)
- We serve Sabo Yaba, Lagos and surrounding areas
- Contact: 0806 860 9291, umohjohn770@gmail.com

Your role:
- Answer questions about driving lessons, packages, and services
- Help users choose the right package based on their needs
- Provide driving tips and guidance
- Be friendly, professional, and helpful
- Keep responses concise and informative

When recommending packages, ask about:
- Driving experience level
- Learning goals (license acquisition, skill improvement, defensive driving)
- Schedule availability
- Timeline for obtaining license`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(history?.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })) || []),
      { role: "user", content: message },
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        max_tokens: 1024,
        temperature: 0.7,
        messages,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Groq API error:", error);
      return NextResponse.json({
        response: "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at 0806 860 9291.",
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "I'm here to help! What would you like to know about our driving lessons?";

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      response: "I apologize, but I'm having trouble connecting right now. Please contact us at 0806 860 9291 for immediate assistance.",
    });
  }
}
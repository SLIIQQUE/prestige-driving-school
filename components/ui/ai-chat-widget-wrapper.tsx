"use client";

import dynamic from "next/dynamic";

const AIChatWidget = dynamic(
  () => import("@/components/ui/ai-chat-widget"),
  { 
    ssr: false,
    loading: () => null 
  }
);

export default function AIChatWidgetWrapper() {
  return <AIChatWidget />;
}
# AI Assistance Feature Design

## Project: Prestige Driving School Website
**Date:** 2026-04-08

## Overview
Add AI assistance functionality to the Prestige Driving School website with a Full AI Suite including:
1. **AI Chatbot** - On-site assistant for answering driving school questions
2. **AI Package Recommender** - Analyzes user needs and recommends suitable driving packages
3. **Virtual Instructor** - AI-powered virtual driving instructor guidance

## Architecture

### AI Engine
- **Cloud AI** using Claude API for advanced reasoning
- Environment variable: `ANTHROPIC_API_KEY`
- Components will check for API key and show setup instructions if missing

### Components Required

1. **`/components/ui/ai-chat-widget.tsx`** - Floating chat widget
   - Floating button in bottom-right corner
   - Expands to chat panel with AI assistant
   - Supports all three AI features

2. **`/app/ai/page.tsx`** - Dedicated AI assistance page
   - Full AI suite interface
   - Package recommender with quiz
   - Virtual instructor feature

3. **Navigation Updates**
   - Add "AI Assistant" link in navbar
   - Add AI section in footer
   - Add prominent AI CTA buttons across pages

### Placement Strategy (Emphasized Everywhere)
- Floating AI chat widget on all pages (bottom-right)
- "AI Assistant" nav link
- Footer: AI-powered section with link to /ai
- Homepage: AI features highlighted in CTA section
- Services/Pricing pages: AI recommender call-to-action

## Data Flow
- Chat widget manages conversation state
- Claude API calls for responses
- Package recommender uses quiz form data
- Virtual Instructor displays pre-recorded video/content guidance

## Component Details

### AI Chat Widget
- Fixed position bottom-right
- Collapsed: FAB button with AI icon
- Expanded: 400px wide chat panel
- Handles: general questions, package inquiries, scheduling help

### AI Package Recommender
- Quiz: 5 questions about driving experience, goals, schedule
- Output: Recommended package with reasoning
- Links to contact/payment

### Virtual Instructor
- Common driving scenarios with tips
- Video/content library
- Interactive Q&A

## Responsive Behavior
- Chat widget: full-screen on mobile, 400px on desktop
- AI page: responsive grid layout
- Navbar: AI link hidden in hamburger menu

## Error Handling
- No API key: Show setup instructions
- API error: Friendly error message with retry
- Offline: Cached responses where possible

## Implementation Priority
1. Create AI chat widget component
2. Add to layout.tsx (all pages)
3. Add AI link to navbar
4. Create /ai page
5. Add AI section to footer
6. Add AI CTAs to relevant pages

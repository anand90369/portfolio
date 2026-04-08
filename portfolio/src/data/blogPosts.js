export const blogPosts = [
  {
    id: 'building-ai-powered-react-apps',
    title: 'Building AI-Powered React Apps with Claude API',
    date: '2026-03-15',
    tags: ['AI', 'React', 'Claude API', 'Tutorial'],
    excerpt:
      'A deep dive into integrating Claude API into React applications. Learn how to build intelligent features like smart search, content generation, and conversational interfaces.',
    content: `
## Why AI in Frontend?

The rise of large language models has opened up incredible possibilities for frontend developers. Instead of just displaying data, our apps can now **understand** and **generate** content in real-time.

In this post, I'll walk you through integrating the Claude API into a React application to build truly intelligent user interfaces.

## Setting Up the Claude API

First, you'll need an API key from Anthropic. Store it securely in your environment variables:

\`\`\`bash
VITE_CLAUDE_API_KEY=your-api-key-here
\`\`\`

## Building a Smart Chat Component

Here's how I structured the chat component:

\`\`\`javascript
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');

const sendMessage = async () => {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_CLAUDE_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [{ role: 'user', content: input }],
    }),
  });
  const data = await response.json();
  // Handle response
};
\`\`\`

## Key Takeaways

1. **Always stream responses** for better UX - users see tokens as they arrive
2. **Cache common queries** to reduce API costs and latency
3. **Set clear system prompts** to keep AI responses focused and on-brand
4. **Handle errors gracefully** - API calls can fail, and your UI should handle it

> The best AI features are the ones users don't even realize are AI-powered. They just feel natural.

## What's Next?

In my next post, I'll cover building a RAG pipeline for your React app so the AI can answer questions about your specific content. Stay tuned!
`,
  },
  {
    id: 'mastering-framer-motion',
    title: 'Mastering Framer Motion: Animations That Ship',
    date: '2026-02-28',
    tags: ['React', 'Animation', 'Framer Motion', 'UI/UX'],
    excerpt:
      'Stop over-engineering animations. Learn the practical patterns I use in production to create smooth, performant animations with Framer Motion.',
    content: `
## The Animation Problem

Most developers fall into two camps: no animations at all, or animations everywhere that slow down the page. The sweet spot is **purposeful motion** — animations that guide the user's eye and provide feedback.

## My Go-To Patterns

### 1. Fade-In on Scroll

The most commonly useful animation. Elements gently appear as you scroll:

\`\`\`javascript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};
\`\`\`

### 2. Staggered Children

For lists and grids, stagger the animation of each item:

\`\`\`javascript
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
\`\`\`

### 3. Layout Animations

When elements change position (filtering, reordering), use \`layout\` prop for automatic interpolation:

\`\`\`javascript
<motion.div layout layoutId={item.id}>
  {/* content */}
</motion.div>
\`\`\`

## Performance Tips

- Use \`will-change: transform\` sparingly
- Prefer \`transform\` and \`opacity\` — they're GPU-accelerated
- Use \`viewport: { once: true }\` so scroll animations only fire once
- Test on low-end devices — your M2 MacBook is not representative

## The Rule of Subtlety

If a user notices your animation, it's probably too much. The goal is to make the interface feel **alive**, not **busy**.
`,
  },
  {
    id: 'fullstack-project-architecture',
    title: 'How I Structure Full-Stack Projects in 2026',
    date: '2026-01-20',
    tags: ['Architecture', 'Full-Stack', 'Best Practices'],
    excerpt:
      'My battle-tested project architecture for React + Node.js apps. Covers folder structure, API design, state management, and deployment strategies.',
    content: `
## The Problem with "Best Practices"

Every blog post about project structure shows you a \`todo\` app. Real projects have auth, payments, file uploads, background jobs, and a dozen third-party integrations. Here's what actually works at scale.

## Frontend Architecture

\`\`\`
src/
  components/     # Reusable UI components
  pages/          # Route-level components
  hooks/          # Custom React hooks
  utils/          # Helper functions
  data/           # Static data and constants
  services/       # API client functions
\`\`\`

### Key Principles

1. **Pages are thin** — they compose components and pass data
2. **Components are dumb** — they receive props and render UI
3. **Hooks contain logic** — data fetching, state management, side effects
4. **Utils are pure** — no React, no side effects, easily testable

## Backend Architecture

\`\`\`
src/
  routes/         # Express/Fastify route handlers
  services/       # Business logic
  models/         # Database models
  middleware/     # Auth, validation, logging
  jobs/           # Background tasks
  utils/          # Shared helpers
\`\`\`

## State Management in 2026

Hot take: **you probably don't need Redux**. Here's my decision tree:

- **Server state**: React Query / TanStack Query
- **URL state**: React Router search params
- **Form state**: React Hook Form
- **Global UI state**: Zustand (only if context isn't enough)
- **Context**: Theme, auth, locale

## Deployment

I use a simple but effective setup:
- **Frontend**: Vercel or GitHub Pages
- **Backend**: Railway or Fly.io
- **Database**: Supabase or PlanetScale
- **CI/CD**: GitHub Actions

The best architecture is the one your team can understand and maintain. Don't over-engineer it.
`,
  },
]

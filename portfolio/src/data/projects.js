export const projects = [
  {
    id: 'ai-doc-assistant',
    title: 'AI Doc Assistant',
    description:
      'An intelligent documentation assistant that uses RAG (Retrieval-Augmented Generation) to answer questions about any codebase. Processes GitHub repos, builds vector embeddings, and provides context-aware responses via Claude API.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop',
    tags: ['React', 'Python', 'Claude API', 'LangChain', 'Pinecone'],
    github: 'https://github.com/alexchen/ai-doc-assistant',
    live: 'https://aidocassistant.dev',
    featured: true,
  },
  {
    id: 'devflow',
    title: 'DevFlow',
    description:
      'A real-time project management dashboard for engineering teams. Features Kanban boards, sprint planning, burndown charts, and Slack/GitHub integrations. Built for teams of 5-50 developers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket', 'Redis'],
    github: 'https://github.com/alexchen/devflow',
    live: 'https://devflow.app',
    featured: true,
  },
  {
    id: 'ecoshop',
    title: 'EcoShop',
    description:
      'A sustainable e-commerce platform that calculates the carbon footprint of every product. Includes AI-powered product recommendations based on environmental impact scores and user preferences.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI'],
    github: 'https://github.com/alexchen/ecoshop',
    live: 'https://ecoshop.demo.dev',
    featured: true,
  },
  {
    id: 'codereviewer',
    title: 'CodeReviewer AI',
    description:
      'An automated code review tool that integrates with GitHub PRs. Uses LLMs to detect bugs, suggest improvements, and enforce coding standards. Reduced review time by 40% for early adopters.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop',
    tags: ['Python', 'Claude API', 'GitHub API', 'Docker', 'FastAPI'],
    github: 'https://github.com/alexchen/codereviewer',
    live: null,
    featured: false,
  },
  {
    id: 'weatherviz',
    title: 'WeatherViz',
    description:
      'A beautiful weather visualization app with animated maps, 7-day forecasts, and severe weather alerts. Uses multiple weather APIs and renders data with D3.js for interactive exploration.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=340&fit=crop',
    tags: ['React', 'D3.js', 'Node.js', 'Weather API', 'MapBox'],
    github: 'https://github.com/alexchen/weatherviz',
    live: 'https://weatherviz.netlify.app',
    featured: false,
  },
  {
    id: 'chatstream',
    title: 'ChatStream',
    description:
      'A real-time chat application with end-to-end encryption, file sharing, and AI-powered message translation. Supports 20+ languages with instant translation using Claude API.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=340&fit=crop',
    tags: ['React', 'WebSocket', 'Node.js', 'Claude API', 'E2E Encryption'],
    github: 'https://github.com/alexchen/chatstream',
    live: 'https://chatstream.io',
    featured: false,
  },
]

export const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort()

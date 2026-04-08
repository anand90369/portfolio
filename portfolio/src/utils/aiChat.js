import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'

const SYSTEM_CONTEXT = `You are Alex Chen's portfolio AI assistant. You know everything about Alex's work, skills, and projects. Be helpful, concise, and friendly.`

// Predefined responses for common queries (used when no API key is configured)
const predefinedResponses = {
  greet: {
    patterns: [/^(hi|hello|hey|howdy|greetings)/i],
    response: `Hey there! 👋 I'm Alex's AI assistant. I can tell you about Alex's skills, projects, experience, or help you figure out how to get in touch. What would you like to know?`,
  },
  profile: {
    patterns: [/summarize.*profile|tell me about|who is alex|about alex|introduce/i],
    response: `**Alex Chen** is a Full-Stack Developer & AI Enthusiast based in ${profile.location} with ${profile.about.highlights[0].value} years of experience.\n\n${profile.about.bio.split('\n\n')[0]}\n\nKey stats:\n${profile.about.highlights.map((h) => `- **${h.label}**: ${h.value}`).join('\n')}`,
  },
  skills: {
    patterns: [/skills|tech|stack|what can|technologies|expertise/i],
    response: `Alex works across the full stack with expertise in:\n\n${skillCategories.map((cat) => `**${cat.icon} ${cat.title}**: ${cat.skills.map((s) => s.name).join(', ')}`).join('\n\n')}\n\nStrongest areas: React (95%), Git (95%), Tailwind CSS (92%), and Prompt Engineering (92%).`,
  },
  projects: {
    patterns: [/projects|built|portfolio|work|explain.*projects/i],
    response: `Here are Alex's featured projects:\n\n${projects.filter((p) => p.featured).map((p) => `🔹 **${p.title}**: ${p.description.substring(0, 100)}...\n   _Tech: ${p.tags.join(', ')}_`).join('\n\n')}\n\nAlex has ${projects.length} projects in total. Want details on any specific one?`,
  },
  jobs: {
    patterns: [/jobs|career|hire|hiring|suggest.*jobs|opportunities|roles/i],
    response: `Based on Alex's skill set, here are ideal roles:\n\n1. **Senior Full-Stack Engineer** — React + Node.js expertise with strong system design skills\n2. **AI/ML Engineer** — Experience with Claude API, LangChain, and RAG pipelines\n3. **Developer Experience Engineer** — Combines coding skills with a passion for tooling and docs\n4. **Technical Lead** — ${profile.about.highlights[0].value} years experience, strong architectural thinking\n5. **Founding Engineer (Startup)** — Versatile full-stack + AI background, ships fast\n\nAlex is open to both full-time and contract roles. Reach out at ${profile.email}!`,
  },
  contact: {
    patterns: [/contact|email|reach|connect|social|hire/i],
    response: `You can reach Alex through:\n\n📧 **Email**: ${profile.email}\n🐙 **GitHub**: [alexchen](${profile.social.github})\n💼 **LinkedIn**: [alexchen](${profile.social.linkedin})\n🐦 **Twitter**: [alexchendev](${profile.social.twitter})\n\nAlex typically responds within 24 hours!`,
  },
  ai: {
    patterns: [/ai assistant|how.*work|what are you|who are you|about you/i],
    response: `I'm an AI assistant built into Alex's portfolio! I'm here to help you learn about Alex's work and skills.\n\nI can:\n- Summarize Alex's profile\n- Explain projects in detail\n- Suggest job fits based on Alex's skills\n- Help you get in touch\n\nTry asking me something like "What has Alex built?" or "Suggest jobs for Alex."`,
  },
}

function findPredefinedResponse(message) {
  for (const entry of Object.values(predefinedResponses)) {
    if (entry.patterns.some((pattern) => pattern.test(message))) {
      return entry.response
    }
  }
  return null
}

// Attempt Claude API call if key is available
async function callClaudeAPI(messages) {
  const apiKey = import.meta.env.VITE_CLAUDE_API_KEY
  if (!apiKey) return null

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 512,
        system: SYSTEM_CONTEXT,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    })

    if (!response.ok) return null
    const data = await response.json()
    return data.content[0].text
  } catch {
    return null
  }
}

export async function getAIResponse(message, conversationHistory = []) {
  // Try Claude API first
  const apiMessages = [
    ...conversationHistory.map((m) => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text,
    })),
    { role: 'user', content: message },
  ]

  const apiResponse = await callClaudeAPI(apiMessages)
  if (apiResponse) return apiResponse

  // Fall back to predefined responses
  const predefined = findPredefinedResponse(message)
  if (predefined) return predefined

  return `That's a great question! I can help you with:\n\n- **"Summarize my profile"** — Learn about Alex's background\n- **"What are Alex's skills?"** — See the full tech stack\n- **"Explain Alex's projects"** — Explore the portfolio\n- **"Suggest jobs for Alex"** — See ideal role matches\n- **"How can I contact Alex?"** — Get in touch\n\nTry one of these, or ask anything about Alex's work!`
}

export const suggestedPrompts = [
  'Summarize my profile',
  'Suggest jobs for me',
  'Explain my projects',
  'What are Alex\'s skills?',
]

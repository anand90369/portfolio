import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects, allTags } from '../data/projects'

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <div className="pt-20">
      <Section
        id="projects"
        title="My Projects"
        subtitle="A collection of projects I've built, from AI-powered tools to full-stack applications."
      >
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                activeTag === tag
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
            No projects found with the tag "{activeTag}".
          </p>
        )}
      </Section>
    </div>
  )
}

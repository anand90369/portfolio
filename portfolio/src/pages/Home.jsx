import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { useTypingAnimation } from '../hooks/useTypingAnimation'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import SkillBar from '../components/SkillBar'

export default function Home() {
  const typedRole = useTypingAnimation(profile.roles)

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-4 text-sm tracking-wider uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
              <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
                {typedRole}
              </span>
              <span className="ml-0.5 w-0.5 h-7 bg-primary-500 animate-pulse" />
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all"
              >
                View My Work <FiArrowRight />
              </Link>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FiDownload size={16} /> Download Resume
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <Section
        id="featured-projects"
        title="Featured Projects"
        subtitle="A selection of my recent work in web development and AI."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium"
          >
            View all projects <FiArrowRight />
          </Link>
        </motion.div>
      </Section>

      {/* Skills Preview */}
      <Section
        id="skills-preview"
        title="Technical Skills"
        subtitle="Technologies I work with daily."
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.slice(0, 2).map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIdx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.icon} {category.title}
              </h3>
              {category.skills.map((skill, idx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={idx * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-10 sm:p-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of something great.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Get In Touch <FiArrowRight />
          </Link>
        </motion.div>
      </Section>
    </>
  )
}

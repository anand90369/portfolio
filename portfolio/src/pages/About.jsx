import { motion } from 'framer-motion'
import Section from '../components/Section'
import SkillBar from '../components/SkillBar'
import { profile } from '../data/profile'
import { skillCategories } from '../data/skills'

export default function About() {
  return (
    <div className="pt-20">
      {/* Bio Section */}
      <Section id="about" title="About Me" subtitle="Get to know me a bit better.">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Photo / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white text-7xl font-bold shadow-xl">
              AC
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {profile.about.highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{item.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {profile.name}
            </h3>
            <p className="text-sm text-primary-500 font-medium mb-6 uppercase tracking-wider">
              {profile.roles[0]} &bull; {profile.location}
            </p>
            {profile.about.bio.split('\n\n').map((paragraph, idx) => (
              <p
                key={idx}
                className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:shadow-lg transition-shadow"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </Section>

      {/* All Skills */}
      <Section
        id="all-skills"
        title="Skills & Expertise"
        subtitle="A comprehensive look at my technical toolkit."
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
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
                  delay={idx * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

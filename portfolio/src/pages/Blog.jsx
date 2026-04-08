import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import Section from '../components/Section'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return (
    <div className="pt-20">
      <Section
        id="blog"
        title="Blog"
        subtitle="Thoughts on development, AI, and building great software."
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <FiCalendar size={14} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                <Link
                  to={`/blog/${post.id}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 font-medium shrink-0"
                >
                  Read more <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  )
}

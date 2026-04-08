import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FiArrowLeft, FiCalendar } from 'react-icons/fi'
import { blogPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="pt-32 text-center section-container">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Post not found
        </h1>
        <Link
          to="/blog"
          className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-2"
        >
          <FiArrowLeft /> Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-container py-16 max-w-3xl mx-auto px-4 sm:px-6"
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 mb-8"
        >
          <FiArrowLeft size={14} /> Back to all posts
        </Link>

        <header className="mb-10">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 my-10" />

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium"
        >
          <FiArrowLeft size={14} /> Back to all posts
        </Link>
      </motion.article>
    </div>
  )
}

import { motion } from 'framer-motion'
import SectionTag from '../components/ui/SectionTag'
import { BLOG_POSTS } from '../utils/constants'

const bgMap = { green: 'from-green-50 to-emerald-100', blue: 'from-blue-50 to-indigo-100', yellow: 'from-yellow-50 to-amber-100' }

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag>Financial Tips</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            Money <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">Expert financial advice tailored for everyday Kenyans.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300 cursor-pointer"
            >
              <div className={`h-40 flex items-center justify-center text-5xl bg-gradient-to-br ${bgMap[post.bg]}`}>
                {post.emoji}
              </div>
              <div className="p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">{post.tag}</div>
                <h3 className="font-bold text-base leading-tight text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                  <span>📅 {post.date}</span>
                  <span>·</span>
                  <span>⏱ {post.readTime} min read</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

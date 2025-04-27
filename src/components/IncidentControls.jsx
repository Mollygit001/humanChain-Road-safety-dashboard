/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';

export default function IncidentControls({ severityFilter, setSeverityFilter, sortOrder, setSortOrder, toggleForm, showForm }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Filter by Severity:</label>
          <div className="inline-flex gap-2 flex-wrap">
            {['All', 'Low', 'Medium', 'High'].map((severity) => (
              <motion.button
                key={severity}
                className={`px-4 py-2 rounded-lg border-2 border-black font-bold ${severityFilter === severity
                    ? 'bg-neo-black text-white'
                    : 'bg-white dark:bg-gray-800'
                  } shadow-neo`}
                onClick={() => setSeverityFilter(severity)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {severity}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Sort by Date:</label>
          <div className="inline-flex gap-2">
            <motion.button
              className={`px-4 py-2 rounded-lg border-2 border-black font-bold ${sortOrder === 'newest'
                  ? 'bg-neo-black text-white'
                  : 'bg-white dark:bg-gray-800'
                } shadow-neo`}
              onClick={() => setSortOrder('newest')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Newest First
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg border-2 border-black font-bold ${sortOrder === 'oldest'
                  ? 'bg-neo-black text-white'
                  : 'bg-white dark:bg-gray-800'
                } shadow-neo`}
              onClick={() => setSortOrder('oldest')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Oldest First
            </motion.button>
          </div>
        </div>
      </div>

      {/* Report Incident */}
      <motion.button
        onClick={toggleForm}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor: showForm ? '#f87171' : '#86efac', 
          color: '#000000'
        }}
        transition={{ duration: 0.3 }}
        className="px-6 py-3 rounded-lg neo-button flex justify-center items-center relative overflow-hidden min-w-[220px]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={showForm ? 'cancel' : 'report'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {showForm ? 'Cancel Report' : '+ Report New Incident'}
          </motion.span>
        </AnimatePresence>
      </motion.button>

    </div>
  );
}

/* eslint-disable no-unused-vars */
// components/IncidentForm.jsx

import { motion } from 'framer-motion';

export default function IncidentForm({ newIncident, handleInputChange, handleSubmit }) {
  return (
    <motion.div
      className="mb-8 p-6 neo-card rounded-lg"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-4">Report New Incident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-bold mb-2">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={newIncident.title}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg neo-input"
            placeholder="Enter incident title"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-bold mb-2">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newIncident.description}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg neo-input min-h-[120px]"
            placeholder="Describe the incident in detail"
          />
        </div>

        <div>
          <label htmlFor="severity" className="block font-bold mb-2">Severity:</label>
          <select
            id="severity"
            name="severity"
            value={newIncident.severity}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg neo-input"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <motion.button
          type="submit"
          className="px-6 py-3 rounded-lg neo-button bg-neo-green text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Incident Report
        </motion.button>
      </form>
    </motion.div>
  );
}

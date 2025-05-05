/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';

export default function IncidentCard({ incident, expandedId, toggleDetails, removeIncident }) {
  const isExpanded = expandedId === incident.id;


  return (
    <motion.div 
      className="neo-card rounded-lg overflow-hidden"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h3 className="text-xl font-bold">{incident.title}</h3>
            <p className="text-muted-foreground">
              Reported on {format(new Date(incident.reported_at), 'PPP p')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span 
              className={`inline-block px-3 py-1 rounded-lg font-bold text-sm severity-${incident.severity.toLowerCase()}`}
            >
              {incident.severity} Severity
            </span>

            <motion.button
              className="px-4 py-2 rounded-lg neo-button"
              onClick={() => toggleDetails(incident.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Hide Details' : 'View Details'}
            </motion.button>

            <motion.button
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              onClick={() => removeIncident(incident.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Remove incident"
            >
              <Trash2 className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-black"
            >
              <h4 className="font-bold mb-2">Description:</h4>
              <p>{incident.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

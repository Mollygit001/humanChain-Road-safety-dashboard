/* eslint-disable no-unused-vars */
import IncidentCard from './IncidentCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function IncidentList({ incidents, expandedId, toggleDetails , removeIncident }) {

  if (incidents.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold">No incidents found</h3>
        <p className="text-muted-foreground">Try changing your filters or report a new incident</p>
      </div>
    );
  }

  return (
    <motion.div
      className="space-y-4"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1, // cards appear one after another
          },
        },
      }}
    >
      <AnimatePresence>
        {incidents.map((incident) => (
          <motion.div
            key={incident.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 20 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            layout // for smooth reordering
          >
            <IncidentCard
              incident={incident}
              expandedId={expandedId}
              toggleDetails={toggleDetails}
              removeIncident={removeIncident} // Pass the removeIncident function to IncidentCard
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

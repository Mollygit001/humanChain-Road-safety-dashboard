/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IncidentControls from './IncidentControls';
import IncidentList from './IncidentList';
import IncidentForm from './ReportIncidentForm';
import { useIncidents } from '@/hooks/useIncidents'; 

export default function IncidentDashboard() {
  const {
    incidents,
    expandedIncidentId,
    severityFilter,
    sortOrder,
    showReportForm,
    setSeverityFilter,
    setSortOrder,
    setShowReportForm,
    handleToggleExpand,
    handleAddIncident,
  } = useIncidents();

  const [newIncident, setNewIncident] = useState({
    title: '',
    description: '',
    severity: 'Medium',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncident((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newIncident.title.trim() || !newIncident.description.trim()) {
      alert('Title and description are required');
      return;
    }
    const now = new Date().toISOString();
    const newIncidentObject = {
      id: Date.now(), // 🔥 better unique id
      title: newIncident.title,
      description: newIncident.description,
      severity: newIncident.severity,
      reported_at: now,
    };
    handleAddIncident(newIncidentObject);
    setNewIncident({ title: '', description: '', severity: 'Medium' });
    setShowReportForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div className="mb-8 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">AI Safety Incident Dashboard</h1>
        <p className="text-xl text-muted-foreground">Monitor and report AI safety incidents</p>
      </motion.div>

      {/* Controls */}
      <IncidentControls
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        toggleForm={() => setShowReportForm(prev => !prev)}
        showForm={showReportForm}
      />

      {/* Form */}
      <AnimatePresence>
        {showReportForm && (
          <IncidentForm
            newIncident={newIncident}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>

      {/* List */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
        <IncidentList
          incidents={incidents}
          expandedId={expandedIncidentId}
          toggleDetails={handleToggleExpand}
        />
      </motion.div>
    </div>
  );
}

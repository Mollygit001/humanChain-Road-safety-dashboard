// src/hooks/useIncidents.js

import { useState } from 'react';
import { mockIncidents } from '@/mock/mockData';

export const useIncidents = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [expandedIncidentId, setExpandedIncidentId] = useState(null);
  const [severityFilter, setSeverityFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showReportForm, setShowReportForm] = useState(false);

  const filteredIncidents = incidents.filter(incident =>
    severityFilter === 'All' || incident.severity === severityFilter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const handleToggleExpand = (id) => {
    setExpandedIncidentId(prev => (prev === id ? null : id));
  };

  const handleAddIncident = (newIncident) => {
    setIncidents(prev => [newIncident, ...prev]);
  };

  return {
    incidents: sortedIncidents,
    expandedIncidentId,
    severityFilter,
    sortOrder,
    showReportForm,
    setSeverityFilter,
    setSortOrder,
    setShowReportForm,
    handleToggleExpand,
    handleAddIncident,
  };
};

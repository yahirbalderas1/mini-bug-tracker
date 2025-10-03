import React from "react";

export default function Filters({ filters, setFilters }) {
  const handleChange = e => setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div>
      <input name="title" placeholder="Buscar por título" value={filters.title || ""} onChange={handleChange} />
      <select name="status" value={filters.status || ""} onChange={handleChange}>
        <option value="">Todos</option>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select name="priority" value={filters.priority || ""} onChange={handleChange}>
        <option value="">Todos</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

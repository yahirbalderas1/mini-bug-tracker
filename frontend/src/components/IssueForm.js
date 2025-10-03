import React, { useState } from "react";
import api from "../services/api";

export default function IssueForm({ onSuccess }) {
  const [form, setForm] = useState({ title: "", description: "", priority: "medium", status: "open" });
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/issues", form);
      setForm({ title: "", description: "", priority: "medium", status: "open" });
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.error || "Error al crear issue");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Título" value={form.title} onChange={handleChange} required minLength={3} maxLength={120} />
      <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} maxLength={1000} />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>
      </select>
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="open">Open</option><option value="in_progress">In Progress</option><option value="done">Done</option>
      </select>
      <button type="submit">Crear</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

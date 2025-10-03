import React, { useEffect, useState } from "react";
import api from "../services/api";
import Filters from "./Filters";

export default function IssueList() {
  const [issues, setIssues] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  const fetchIssues = async () => {
    const res = await api.get("/issues", { params: { ...filters, page, limit: 5 } });
    setIssues(res.data.data);
  };

  useEffect(() => { fetchIssues(); }, [filters, page]);

  const handleDelete = async id => {
    await api.delete(`/issues/${id}`);
    fetchIssues();
  };

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <ul>
        {issues.map(i => (
          <li key={i._id}>
            <b>{i.title}</b> ({i.priority}) - {i.status}
            <button onClick={() => handleDelete(i._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

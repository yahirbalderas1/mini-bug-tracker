import React from "react";
import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";

function App() {
  return (
    <div>
      <h1>Mini Bug Tracker</h1>
      <IssueForm onSuccess={() => window.location.reload()} />
      <IssueList />
    </div>
  );
}

export default App;

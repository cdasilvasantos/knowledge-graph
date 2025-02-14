import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import KnowledgeGraphManager from "./components/KnowledgeGraphManager";
import EntityAnalysisDashboard from "./components/EntityAnalysisDashboard";
import Custom3D from "./components/Custom3D";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import ChatApp from "./components/ChatApp"; // Chat Page

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/manager" element={<KnowledgeGraphManager />} />
          <Route path="/analysis" element={<EntityAnalysisDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/3-d" element={<Custom3D />} />
          <Route path="/logout" element={<PageNotFound />} />
          <Route path="/settings" element={<PageNotFound />} />
          <Route path="/profile" element={<PageNotFound />} />
          <Route path="/analytics" element={<PageNotFound />} />
          <Route path="/chat" element={<ChatApp />} /> {/* Chat has its own page now */}
        </Routes>
      </div>
    </Router>
  );
}

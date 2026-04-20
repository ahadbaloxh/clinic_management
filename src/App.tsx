import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/components/layout/Layout";
import LoginPage from "@/pages/Auth/Login";
import Dashboard from "@/pages/Doctor/Dashboard";
import Patients from "@/pages/Doctor/Patients";
import Records from "@/pages/Doctor/Records";
import Settings from "@/pages/Doctor/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Main App Routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="records" element={<Records />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

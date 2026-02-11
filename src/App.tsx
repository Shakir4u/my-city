import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Tabs from "./component/Tabs";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import School from "./pages/School";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-white">
        {/* Tabs always on top */}
        <Tabs />
        {/* Page content && Common scrollable content area */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/school" element={<School />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;

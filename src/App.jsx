import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CyGenProvider } from "./context/CyGenContext";
import Dashboard from "./pages/Dahsbaord";
import NotFound from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <CyGenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CyGenProvider>
  );
}

export default App;

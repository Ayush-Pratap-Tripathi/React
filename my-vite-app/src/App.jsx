import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Screens/Components/Navbar/Navbar";
import Home from "./Home/Home";
import Dashboard from "./screens/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
     <Route path="/" element={<LandingPage />} />
     </Routes>
    </Router>
    </div>
  );
}

export default App;

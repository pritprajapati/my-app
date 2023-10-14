import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#0c0c17";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const createAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
    <Router>
      <Navbar title="TextBuddy" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
      <Routes>
      <Route path='/' element={<TextForm createAlert={createAlert} heading="Analyze text!" mode={mode} />} />
      <Route path='/about' element={<About/>} />
    
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

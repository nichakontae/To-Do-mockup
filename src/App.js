import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Todos from "./pages/todo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

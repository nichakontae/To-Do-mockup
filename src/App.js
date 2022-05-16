import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Todos from "./pages/todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Todos />
    </div>
  );
}

export default App;

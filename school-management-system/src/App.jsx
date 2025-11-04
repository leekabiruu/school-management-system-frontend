import Students from "./pages/Students";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Welcome to School Management System</h1>
      <p>Manage students easily with CRUD operations.</p>
      <Students />
    </div>
  );
}

export default App;
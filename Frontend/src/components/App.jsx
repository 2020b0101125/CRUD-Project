import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReadPage from "./CUD/ReadPage";
import CreatePage from "./CUD/Createpage";
import UpdatePage from "./CUD/UpdatePage";
import DeletePage from "./CUD/DeletePage";

import "../public/styles.css";

function App() {
  return (
    <Router>
      <section className="header">
        <h1>CRUD Project</h1>

        <nav>
          <Link to="/read" className="hero-btn">
            Read
          </Link>
          <Link to="/create" className="hero-btn">
            Create
          </Link>
          <Link to="/update" className="hero-btn">
            Update
          </Link>
          <Link to="/delete" className="hero-btn">
            Delete
          </Link>
        </nav>
      </section>
      <Routes>
        <Route path="/read" element={<ReadPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/delete" element={<DeletePage />} />
      </Routes>
    </Router>
  );
}

export default App;

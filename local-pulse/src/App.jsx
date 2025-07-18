import "./App.css";
import Post from './comps/post.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreatePosts from "./comps/createPosts.jsx";
import Posts from "./comps/post.jsx";
function App() {
  return (
    <>
      <Router>
      <nav>
        <Link to="/">View Posts</Link>
        {" | "}
        <Link to="/create">Create Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/create" element={<CreatePosts />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

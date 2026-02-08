
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Project />} />
      </Route>
    </Routes>
    <Analytics />
    </>
  );
}

export default App;

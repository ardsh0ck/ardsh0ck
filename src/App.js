import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/common/layout/Layout'
import Home from './components/home/Home'
import Works from './components/works/works/Works'
import About from './components/about/About'
import Music from './components/music/Music'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Home />} />
            <Route element={<Works />} path="works" />
            <Route element={<About />} path="about" />
            <Route element={<Music />} path="music" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

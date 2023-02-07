import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/common/layout/Layout'
import Home from './components/home/Home'
import Works from './components/works/works/Works'
import SingleWork from './components/works/singleWork/SingleWork'
import About from './components/about/About'
import Music from './components/music/Music'
import NotFound from './components/common/notFound/NotFound'
import './App.scss'
import ScrollToTop from './utils/scrollToTop'

function App(props) {
  const titlePrefix = 'ardsh0ck.name | '

  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Home />} />
            <Route element={<Works title={`${titlePrefix}`} />} path="works" />
            <Route
              element={<SingleWork title={`${titlePrefix}`} />}
              path="works/:slug"
            />
            <Route element={<About title={`${titlePrefix}`} />} path="about" />
            <Route element={<Music title={`${titlePrefix}`} />} path="music" />
            <Route element={<NotFound title={`${titlePrefix}`} />} path="*" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

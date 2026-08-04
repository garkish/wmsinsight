import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Guides from './pages/Guides'
import GuideComparison from './pages/GuideComparison'
import Consulting from './pages/Consulting'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/sap-ewm-vs-manhattan-vs-blue-yonder" element={<GuideComparison />} />
          <Route path="/consulting" element={<Consulting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

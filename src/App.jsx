import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Guides from './pages/Guides'
import GuideComparison from './pages/GuideComparison'
import GuideIntegration from './pages/GuideIntegration'
import GuideMultiClient from './pages/GuideMultiClient'
import Consulting from './pages/Consulting'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/infios-vs-sap-ewm-vs-manhattan-vs-blue-yonder" element={<GuideComparison />} />
          <Route path="/guides/sap-ewm-vs-manhattan-vs-blue-yonder" element={<GuideComparison />} />
          <Route path="/guides/wms-erp-integrations" element={<GuideIntegration />} />
          <Route path="/guides/multi-client-3pl-wms" element={<GuideMultiClient />} />
          <Route path="/consulting" element={<Consulting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

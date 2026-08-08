import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'

import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import MyDataPage from './pages/MyDataPage'
import DataFlowPage from './pages/DataFlowPage'
import ConsentPage from './pages/ConsentPage'
import RequestsPage from './pages/RequestsPage'
import RisksPage from './pages/RisksPage'
import EvidencePage from './pages/EvidencePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="my-data" element={<MyDataPage />} />
          <Route path="data-flow" element={<DataFlowPage />} />
          <Route path="consent" element={<ConsentPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="risks" element={<RisksPage />} />
          <Route path="evidence" element={<EvidencePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
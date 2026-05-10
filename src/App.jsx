import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage.jsx'
import NewsPage from './NewsPage.jsx'
import NewsDetail from './NewsDetail.jsx'
import ActivitiesPage from './ActivitiesPage.jsx'
import ActivityDetail from './ActivityDetail.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
      </Routes>
    </Router>
  )
}

export default App

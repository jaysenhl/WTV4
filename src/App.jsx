import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'
import CreateWorkout from './components/CreateWorkout';
import History from './components/History'
import './index.css'

function App() {

  return (
  <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-workout" element={<CreateWorkout />} />
        <Route path="/history" element={<History />} />
      </Routes>
  </Router>
  )
}

export default App

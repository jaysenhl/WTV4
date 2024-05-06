import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WorkoutProvider } from './components/WorkoutContext';
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'
import CreateWorkout from './components/CreateWorkout';
import History from './components/History'
import './index.css'

function App() {

  return (
  <Router>
    <WorkoutProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-workout" element={<CreateWorkout />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </WorkoutProvider>
  </Router>
  )
}

export default App

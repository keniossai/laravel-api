import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Task from './pages/Task'
import AddTask from './pages/AddTask'

function App() {
	return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Task />} />
      <Route path="/add-task" element={<AddTask />} />
   
    </Routes>
  </Router>
	)
}

export default App

import './assets/css/style.css'
import MainRouter from './components/routing/routers/Mainrouter'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  )
}

export default App

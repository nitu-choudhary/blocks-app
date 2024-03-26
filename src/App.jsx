import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Blocks from './components/blocks/Blocks'
import Navigation from './components/navigation/Navigation'
import Transaction from './components/transactions/Transaction'
import Transfer from './components/transactions/Transfer'
import Homepage from './components/Homepage'

function App() {

  return (
      <>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/blocks" element={<Blocks />} />
          </Routes>
        </Router>
      </>
  )
}

export default App

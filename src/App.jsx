import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Blocks from './components/Blocks'
import Transfer from './components/Transfer'
import Transaction from './components/details/Transaction'
import Navigation from './components/navigation/d/Navigation'

function App() {

  return (
      <>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Transaction />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/blocks" element={<Blocks />} />
          </Routes>
        </Router>
        {/* <Header title="ChainView"/> */}
        {/* <Blocks />
        <Transaction />
        <Transfer /> */}
      </>
  )
}

export default App

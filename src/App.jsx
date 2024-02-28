import './App.css'
import Blocks from './components/Blocks'
import Transfer from './components/Transfer'
import Transaction from './components/details/Transaction'
import Header from './components/header/Header'
import Navigation from './components/navigation/d/Navigation'

function App() {

  return (
      <>
        <Navigation />
        <Header title="ChainView"/>
        <Blocks />
        <Transaction />
        <Transfer />
      </>
  )
}

export default App

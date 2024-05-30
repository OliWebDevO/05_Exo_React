import Clock from '../components/Clock/Clock'
import GuestApp from '../components/GuestApp/GuestApp'
import Today from '../components/Today/Today'
import Header from '../containers/Header/Header'
import './App.css'

function App() {
  return (
    <div className='app'>
    <Header/>
    <GuestApp/>
    <Clock/>
    <Today/>
    </div>
  )
}

export default App

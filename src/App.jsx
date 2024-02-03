import './App.css'
import Cards from './components/Cards'
import { Forground } from './components/Forground'

function App() {

  return (
    <>
      <div className="w-full h-screen bg-zinc-800 relative">
        <Cards />
        <Forground />
      </div>
    </>
  )
}

export default App

import './App.css'
import Counter from './components/Counter'
import ToggleTheme from './components/ToggleTheme'

function App() {
  // The theme handling is done inside <ToggleTheme /> via a body class effect
  return (
    <>
      <Counter />
      <ToggleTheme />
    </>
  )
}

export default App

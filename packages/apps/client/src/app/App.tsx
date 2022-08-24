import { GlobalContext } from "../contexts/globalContext"
import Home from "./Home"

export function App() {
  return (
    <GlobalContext>
      <Home />
    </GlobalContext>
  )
}

export default App

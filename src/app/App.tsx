import { HomeProviderContext } from "../contexts/context"
import Home from "../pages/home"

const App = () => (
  <HomeProviderContext>
    <Home />
  </HomeProviderContext>  
)

export default App

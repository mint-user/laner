import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from '../src/components/routes'
import { AuthHook } from './components/Auth/auth.hook'
import { AuthContext } from './context'

function App() {
  const { token, login, logout } = AuthHook()
  const routes = useRoutes(!!token)
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

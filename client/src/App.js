import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from '../src/components/routes'
import { AuthHook } from './components/Auth/auth.hook'
import { AuthContext } from './context'

function App() {
  const { token, login, logout } = AuthHook()
  const isAutheticated = !!token
  const routes = useRoutes(isAutheticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, isAutheticated
    }}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

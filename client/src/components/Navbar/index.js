import {React, useContext} from 'react'
import { Navbar, NavItem } from 'react-materialize';
import M from "materialize-css";
import { AuthContext } from '../../context'

export const useNavbar = () => {

  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
  }
  
  return (
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#">Logo</a>}
      >
        <NavItem>Github</NavItem>
        <NavItem href="/logout" onClick={logoutHandler}>Logout</NavItem>
      </Navbar>  
  )
}

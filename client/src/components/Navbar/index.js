import {React} from 'react'
import { Navbar, NavItem } from 'react-materialize';
import M from "materialize-css";

export const useNavbar = () => {
  return (
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#">Logo</a>}
      >
        <NavItem>Github</NavItem>
      </Navbar>  
  )
}

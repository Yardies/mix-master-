import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import Wrapper from '../assets/wrappers/Navbar'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <NavLink to={'/'}>
          <h2 className="logo">mixMaster</h2>
        </NavLink>

        <div className="nav-links">
          <NavLink to={'/'} className={'nav-link'}>
            Home
          </NavLink>
          <NavLink to={'about'} className={'nav-link'}>
            About
          </NavLink>
          <NavLink to={'Newsletter'} className={'nav-link'}>
            newsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

// styled component -------
const Wrapper = styled.nav`
  background-color: white;
  .nav-center {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .logo {
    color: green;
    font-weight: 800;
  }
  .nav-links {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    padding: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .nav-link:hover,
  .active {
    color: green;
    font-weight: 700;
  }

  @media (min-width: 678px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
    }
  }
`
//--------------------
export default Navbar

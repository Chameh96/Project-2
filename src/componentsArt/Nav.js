import {Link} from 'react-router-dom'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/articles'>Articles</Link>
          </li>
          <li>
              <Link to='/people'>People in Space</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Nav
  
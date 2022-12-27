import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { NavLink } from "react-router-dom"

const Sidebar = ({ activeCheck}) => {

  return (
      <div className={`sidebar ${activeCheck}`}>
        <ul>
          <li className='mb-5 mt-2 ps-0 ms-0 pe-none d-flex align-items-center'>
            <span className="sidebar-logo me-4">
              <img src={require('../../assets/img/sidebar-logo.png')} width={60} height={60} alt="" />
            </span>
            <span className='sidebar-title'>
              SpaceVerse
            </span>
          </li>
          <NavLink to="/user/dashboard">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('grip')} />
              </span>
              <span className='sidebar-title'>
                Dashboard
              </span>
            </li>
          </NavLink>
          <NavLink to="/user/leaderboard">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('chart-simple')} />
              </span>
              <span className='sidebar-title'>
                Leaderboard
              </span>
            </li>
          </NavLink>
          <NavLink to="/user/quiz">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('user-pen')} />
              </span>
              <span className='sidebar-title'>
                Quiz
              </span>
            </li>
          </NavLink>
          <NavLink to="/user/settings">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('gear')} />
              </span>
              <span className='sidebar-title'>
                Settings
              </span>
            </li>
          </NavLink>
          <NavLink to="/">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('right-from-bracket')} />
              </span>
              <span className='sidebar-title'>
                Logout
              </span>
            </li>
          </NavLink>
          <NavLink to="/user/profile">
            <li className='profile rounded-pill rounded-end position-absolute bottom-0 mb-3'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('circle-user')} />
              </span>
              <span className='sidebar-title'>
                User Profile
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
  )
}

export default Sidebar

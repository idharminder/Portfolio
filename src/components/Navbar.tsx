import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/busboard">BusBoard</NavLink></li>
      <li><NavLink to="/photoviewer">PhotoViewer</NavLink></li>
    </ul>
  )
}

export default Navbar
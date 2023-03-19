import Header from './Header';
import BackDrop from './BackDrop';
import SideBar from './SideBar';
import { useState } from 'react';
import './NavBar.css';
const NavBar = () => {
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState)
  }
    return ( 
        <div className='navbar'>
           <Header openSidebar={toggleSidebar} />
          <div className='sideBar'>
             <BackDrop sidebar={sidebar} closeSidebar={toggleSidebar}  />
             <SideBar sidebar={sidebar} />
          </div>

        </div>
     );
}
 
export default NavBar;
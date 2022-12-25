import { useState } from 'react';

import Navbar from "../navbar/navbar.component";
import Sidebar from '../sidebar/sidebar.component';

const NavComplete = () => {

  const [isOpen,toggleIsOpen] = useState(false);

  return (
    <div>
      <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
      <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
    </div>
  )
}

export default NavComplete;

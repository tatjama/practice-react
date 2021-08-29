import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Navigation(){
    const[showMenu, setShowMenu] = useState(false);

    let menu;
    let menuMask;

    if(showMenu){
        menu = <div className="fixed top-0 left-0 bg-white shadow h-full w-4/5 z-50">
                Open Menu
            </div>
        menuMask = <div 
            className="fixed top-0 left-0 bg-black-t-50 h-full w-full z-50"
            onClick={() => setShowMenu(false)}>

            </div>
    }

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon onClick={() =>  setShowMenu( !showMenu)}
                icon={faBars}
                />
            </span >
            {menuMask}
            {menu}
        </nav>
    )
}

export default Navigation
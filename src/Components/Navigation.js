import React, {useState} from 'react';
//Style library
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated} from 'react-spring';
//Components
import NavigationMenu from './NavigationMenu';

function Navigation(){
    const[showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)'},
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },
      })

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon onClick={() =>  setShowMenu( !showMenu)}
                icon={faBars}
                />
            </span >
            {
                maskTransitions(
                    (styles, item) => item 
                    && <animated.div 
                        style={styles}
                        className="fixed top-0 left-0 bg-black-t-50 h-full w-full z-50"
                        onClick={()=>setShowMenu(false)}
                        >
                          
                        </animated.div>
                )
            }
            {
                menuTransitions(
                    (styles, item) => item 
                    && <animated.div 
                        style={styles}
                        className="fixed top-0 left-0 bg-white shadow h-full w-4/5 z-50 p-3"
                        >
                           <NavigationMenu closeMenu={()=> setShowMenu(false)}/>
                        </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation
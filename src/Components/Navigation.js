import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated} from 'react-spring';

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
                            <span className="font-bold">The menu</span>
                            <ul>
                                <li>Home</li>
                            </ul>
                        </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation
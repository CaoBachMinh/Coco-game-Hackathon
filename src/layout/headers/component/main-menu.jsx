import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => {
                return (
                    <li key={i} className="has-droupdown">

                        <Link href={`${menu.link}`}>

                            {menu.title}

                        </Link>
                        {!menu.mega_menu && menu.check_drop != false &&
                            <ul className="submenu">
                                {menu.submenus?.map((nav, j) => (
                                    <li key={j}>
                                        <Link href={`${nav.link}`}>

                                            {nav.title}
                                            {nav?.hot && <span className="badge-1">hot</span>}
                                            {nav?.new && <span className="badge">new</span>}

                                        </Link>
                                    </li>
                                )) ?? []}
                            </ul>
                        }


                    </li>
                );
            })}
        </ul>
    );
}


export default MainMenu;
import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => {
                return (
                    <li key={i} className="has-droupdown">
                        <a href="#">{menu.title}</a>

                        {!menu.mega_menu && menu.check_drop != false &&
                            <ul className="submenu">
                                {menu.submenus?.map((nav, j) => (
                                    <li key={j}>
                                        <Link href={`${nav.link}`}>
                                            <a>
                                                {nav.title}
                                                {nav?.hot && <span className="badge-1">hot</span>}
                                                {nav?.new && <span className="badge">new</span>}
                                            </a>
                                        </Link>
                                    </li>
                                )) ?? []}
                            </ul>
                        }

                        {menu.mega_menu  &&
                            <ul className="mega-menu">
                                {menu.submenus?.map((nav, j) => (
                                    <li key={j}>
                                        <h6 className="menu-title">{nav.title}</h6>
                                        <ul className="submenu mega-sub-menu-01">
                                            {nav.mega_submenu?.map((m, k) => (
                                                <li key={k}>
                                                    <Link href={`${m.link}`}>
                                                        <a>{m.title}</a>
                                                    </Link>
                                                </li>
                                            )) ?? []}
                                        </ul>
                                    </li>
                                )) ?? []}
                            </ul>
                        }
                    </li>
                )
            })}
        </ul>
    );
}


export default MainMenu;